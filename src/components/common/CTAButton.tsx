import React from "react";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

interface CTAButtonProps {
  onClick?: () => void;
  text?: string;
  className?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ 
  onClick, 
  text = "Find me the right option",
  className = ""
}) => (
  <Card className={`flex items-center justify-center h-16 px-4 md:px-[200px] w-full bg-[#ffffffcc] rounded-lg overflow-hidden border-none shadow-[0px_0px_16px_4px_#7d0af81f,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[110%] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(90deg,rgba(0,122,200,0.4)_0%,rgba(255,177,54,0.4)_50%,rgba(220,0,0,0.4)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0px_0px_20px_6px_#7d0af825,inset_0_1px_0_rgba(255,255,255,0.50),inset_1px_0_0_rgba(255,255,255,0.40),inset_0_-1px_1px_rgba(0,0,0,0.15),inset_-1px_0_1px_rgba(0,0,0,0.13)] ${className}`}>
    <Button
      variant="ghost"
      onClick={onClick}
      className="flex items-center justify-center gap-2 py-3 px-6 min-h-[48px] transition-all duration-200 hover:gap-3"
    >
      <span className="text-black text-base leading-6 font-normal" style={{ fontFamily: 'Work Sans' }}>
        {text}
      </span>
      <ArrowRightIcon className="w-6 h-6" />
    </Button>
  </Card>
);
