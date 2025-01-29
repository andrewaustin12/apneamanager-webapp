"use client";

import config from "@/config";

interface PricingButtonProps {
  text?: string;
  icon?: React.ReactNode;
  className?: string;
}

export const PricingButton = ({ 
  text = "Start Your Sleep Journey",
  icon = (
    <svg 
      viewBox="0 0 24 24"
      fill="white"
      className="w-5 h-5"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  className
}: PricingButtonProps) => {
  const APP_STORE_URL = "https://apps.apple.com/us/app/apnea-freedive-stamina-trainer/id6477821385";
  
  return (
    <button 
      onClick={() => window.open(APP_STORE_URL, '_blank')}
      className={`font-semibold px-8 py-3 rounded-md flex items-center gap-2 hover:opacity-90`} 
      style={{ backgroundColor: config.theme.colors.primary }}
    >
      {icon}
      <span className={className}>{text}</span>
    </button>
  );
};

export default PricingButton;