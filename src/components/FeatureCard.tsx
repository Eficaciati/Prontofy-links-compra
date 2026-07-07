import { ArrowRight } from "lucide-react";
import type { MouseEvent } from "react";
import { trackEvent } from "@/utils/track";

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  link: string;
  accent?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

const FeatureCard = ({ image, title, description, buttonText, link, accent = "from-black/90 via-black/60", onClick }: FeatureCardProps) => {
  return (
    <a
      href={link}
      onClick={(event) => {
        trackEvent("cta_click", {
          location: "feature_card",
          button_text: buttonText,
          feature_title: title,
        });
        onClick?.(event);
      }}
      className="group relative block overflow-hidden rounded-lg border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      style={{ boxShadow: "0 8px 32px -8px rgba(0,0,0,0.5)" }}
    >
      {/* Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[16/8] lg:aspect-[16/7.35]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-r ${accent} to-transparent`} />
        {/* Subtle border glow on hover */}
        <div className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: "inset 0 0 30px rgba(24,195,125,0.1)" }} />
      </div>

      {/* Content */}
      <div className="absolute inset-y-0 left-0 flex w-4/5 flex-col justify-center gap-2 p-4 sm:w-3/5 sm:gap-3 sm:p-6 lg:gap-1.5 lg:w-[60%] lg:p-5 xl:w-[58%] xl:p-6">
        <h3 className="text-base font-bold leading-tight sm:text-xl lg:text-[1.08rem] xl:text-[1.18rem]" style={{ color: "white" }}>
          {title}
        </h3>
        <p className="text-xs leading-relaxed sm:text-sm lg:text-[0.76rem] lg:leading-5 xl:text-[0.82rem]" style={{ color: "rgba(255,255,255,0.75)" }}>
          {description}
        </p>
        <span className="inline-flex w-fit items-center gap-1.5 rounded-sm bg-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary-foreground transition-colors duration-200 sm:gap-2 sm:px-3 sm:py-1.5 sm:text-xs lg:px-2.5 lg:py-1 lg:text-[0.65rem] xl:px-3 xl:py-1.5 xl:text-xs group-hover:bg-secondary">
          {buttonText}
          <ArrowRight className="h-3 w-3 transition-transform duration-200 sm:h-4 sm:w-4 group-hover:translate-x-1" />
        </span>
      </div>
    </a>
  );
};

export default FeatureCard;
