import { supabaseMarketing } from "./supabaseMarketing";
import { Promotion, PromoTimeLeft } from "@/types/promotion";

const PROMO_STORAGE_KEY = "prontofy_active_promotion";
const PROMO_COOKIE_KEY = "prontofy_promo_id";

function setCookie(name: string, value: string, expiresDate: Date) {
  const expires = "; expires=" + expiresDate.toUTCString();
  document.cookie = name + "=" + (encodeURIComponent(value) || "") + expires + "; path=/; SameSite=Lax";
}

function getCookie(name: string): string | null {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
  }
  return null;
}

function eraseCookie(name: string) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

export function isPromotionActive(promo: Promotion): boolean {
  if (!promo || !promo.start || !promo.end) return false;
  const now = Date.now();
  const startTime = new Date(promo.start).getTime();
  const endTime = new Date(promo.end).getTime();

  return now >= startTime && now <= endTime;
}

export function saveActivePromotion(promo: Promotion): void {
  try {
    localStorage.setItem(PROMO_STORAGE_KEY, JSON.stringify(promo));
    const endDate = new Date(promo.end);
    setCookie(PROMO_COOKIE_KEY, promo.id, endDate);
  } catch (err) {
    console.error("Erro ao salvar promoção no localStorage/Cookie:", err);
  }
}

export function clearActivePromotion(): void {
  try {
    localStorage.removeItem(PROMO_STORAGE_KEY);
    eraseCookie(PROMO_COOKIE_KEY);
  } catch (err) {
    console.error("Erro ao limpar promoção ativa:", err);
  }
}

export function getActivePromotion(): Promotion | null {
  try {
    const raw = localStorage.getItem(PROMO_STORAGE_KEY);
    if (!raw) return null;

    const promo: Promotion = JSON.parse(raw);
    if (isPromotionActive(promo)) {
      return promo;
    }

    clearActivePromotion();
    return null;
  } catch (err) {
    console.error("Erro ao ler promoção ativa:", err);
    clearActivePromotion();
    return null;
  }
}

export async function fetchPromotionById(promoId: string): Promise<Promotion | null> {
  try {
    const { data, error } = await supabaseMarketing
      .from("promotions")
      .select("*")
      .eq("id", promoId)
      .maybeSingle();

    if (error || !data) {
      if (error) console.error("Erro ao buscar promoção no Supabase Marketing:", error);
      return null;
    }

    return data as Promotion;
  } catch (err) {
    console.error("Erro inesperado ao buscar promoção:", err);
    return null;
  }
}

export function calculateTimeLeft(endDateIso: string): PromoTimeLeft {
  const total = new Date(endDateIso).getTime() - Date.now();

  if (total <= 0) {
    return { hours: "00", minutes: "00", seconds: "00", isExpired: true };
  }

  const secondsTotal = Math.floor(total / 1000);
  const hours = Math.floor(secondsTotal / 3600);
  const minutes = Math.floor((secondsTotal % 3600) / 60);
  const seconds = secondsTotal % 60;

  return {
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
    isExpired: false,
  };
}

export async function processPromoUrlParam(promoId: string): Promise<Promotion | null> {
  if (!promoId) return getActivePromotion();

  const promo = await fetchPromotionById(promoId);
  if (promo && isPromotionActive(promo)) {
    saveActivePromotion(promo);
    return promo;
  }

  return getActivePromotion();
}
