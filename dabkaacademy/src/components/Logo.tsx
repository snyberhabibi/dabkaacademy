import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Logo({ variant = "light", size = "md", className = "" }: LogoProps) {
  const textColor = variant === "light" ? "#1a1a1a" : "#ffffff";
  const accentColor = "#CE1126";

  const sizeClasses = {
    sm: "text-lg sm:text-xl",
    md: "text-xl sm:text-2xl",
    lg: "text-2xl sm:text-3xl md:text-4xl",
  };

  return (
    <Link href="/" className={`inline-flex items-center gap-1 group ${className}`}>
      {/* Tatreez-inspired geometric accent */}
      <div className="relative mr-1 hidden sm:flex">
        <div className="grid grid-cols-2 gap-[2px]">
          <div className="w-2 h-2 bg-[#CE1126]"></div>
          <div className="w-2 h-2 bg-transparent"></div>
          <div className="w-2 h-2 bg-transparent"></div>
          <div className="w-2 h-2 bg-[#CE1126]"></div>
        </div>
      </div>

      {/* Logo Text */}
      <span className={`${sizeClasses[size]} font-black tracking-tight uppercase`}>
        <span style={{ color: textColor }}>DABKA</span>
        <span style={{ color: accentColor }}> ACADEMY</span>
      </span>

      {/* Accent bar on hover */}
      <div className="absolute -bottom-1 left-0 w-0 h-[3px] bg-[#CE1126] group-hover:w-full transition-all duration-300"></div>
    </Link>
  );
}
