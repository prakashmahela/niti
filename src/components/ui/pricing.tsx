"use client";

import { buttonVariants } from "./button";
import { Label } from "./label";
import { Switch } from "./switch";
import { useMediaQuery } from "../../hooks/use-media-query";
import { cn } from "../../lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";

export interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

export function Pricing({
  plans,
  title = "Simple, Transparent Pricing",
  description = "Choose the plan that works for you. All plans include access to our platform, lead generation tools, and dedicated support.",
}: PricingProps) {
  const [isMonthly, setIsMonthly] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const switchRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: [
          "#3b82f6",
          "#10b981",
          "#f59e0b",
          "#f43f5e",
        ],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      });
    }
  };

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
      
      // Calculate active index based on scroll position
      const index = Math.round(scrollLeft / 350);
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 500);
    }
  };

  return (
    <div className="container py-20 mx-auto px-4">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-bold tracking-wider sm:text-5xl font-anton uppercase color-flow-text">
          {title}
        </h2>
        <p className="text-slate-600 text-lg whitespace-pre-line max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      <div className="flex justify-center items-center gap-4 md:gap-8 mb-12">
        <span className={cn("text-sm md:text-lg font-bold transition-colors whitespace-nowrap tracking-tight", isMonthly ? "text-black" : "text-slate-400")}>
          Course Fee
        </span>
        <Label className="relative inline-flex items-center cursor-pointer">
          <Switch
            ref={switchRef as any}
            checked={!isMonthly}
            onCheckedChange={handleToggle}
            className="relative scale-110 md:scale-150"
          />
        </Label>
        <span className={cn("text-sm md:text-lg font-bold transition-colors whitespace-nowrap tracking-tight", !isMonthly ? "text-black" : "text-slate-400")}>
          One-time Payment <span className="text-emerald-600 font-bold">(Save 10%)</span>
        </span>
      </div>

      <div className="relative group">
        <div 
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex overflow-x-auto gap-3 md:gap-6 pb-8 snap-x snap-mandatory scrollbar-hide no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "min-w-[calc(50%-6px)] md:min-w-[350px] snap-center rounded-2xl md:rounded-3xl border p-4 md:p-8 bg-white relative flex flex-col transition-all duration-300",
                plan.isPopular ? "border-blue-500 shadow-xl scale-[1.02] md:scale-105 z-10" : "border-slate-200 shadow-sm hover:shadow-md"
              )}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white py-1 px-4 rounded-full flex items-center gap-1 text-sm font-bold shadow-lg">
                  <Star className="h-3 w-3 fill-current" />
                  <span>MOST POPULAR</span>
                </div>
              )}
              
              <div className="flex-1 flex flex-col">
                <h3 className="text-sm md:text-xl font-bold text-slate-900 mb-1 md:mb-2 uppercase tracking-wider">
                  {plan.name}
                </h3>
                <p className="text-slate-500 text-[10px] md:text-sm mb-4 md:mb-6 line-clamp-2 md:line-clamp-none">
                  {plan.description}
                </p>
                
                <div className="mb-4 md:mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl md:text-4xl font-bold text-slate-900">
                      <NumberFlow
                        value={isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)}
                        format={{
                          style: "currency",
                          currency: "INR",
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        }}
                        transformTiming={{
                          duration: 500,
                          easing: "ease-out",
                        }}
                      />
                    </span>
                    <span className="text-slate-500 text-[10px] md:text-sm font-medium">
                      {isMonthly ? "/ course" : " total"}
                    </span>
                  </div>
                  <p className="text-[8px] md:text-xs text-slate-400 mt-1">
                    {isMonthly ? "Standard enrollment" : "One-time payment discount applied"}
                  </p>
                </div>

                <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 md:gap-3">
                      <div className="mt-1 bg-emerald-100 rounded-full p-0.5">
                        <Check className="h-2 w-2 md:h-3 md:w-3 text-emerald-600" />
                      </div>
                      <span className="text-slate-600 text-[10px] md:text-sm line-clamp-1 md:line-clamp-none">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <a
                    href={plan.href}
                    className={cn(
                      "w-full py-2.5 md:py-4 rounded-lg md:rounded-xl font-bold text-center transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-[1.02] active:scale-[0.98] border-2 border-black text-xs md:text-base",
                      plan.isPopular 
                        ? "bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-200" 
                        : "bg-slate-900 text-white hover:bg-black shadow-lg shadow-slate-200"
                    )}
                  >
                    {plan.buttonText}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <AnimatePresence>
          {canScrollLeft && (
            <motion.button
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-black shadow-xl border-2 border-black p-3 rounded-full text-white hover:bg-blue-600 hover:scale-110 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {canScrollRight && (
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-black shadow-xl border-2 border-black p-3 rounded-full text-white hover:bg-blue-600 hover:scale-110 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
      
      <div className="mt-8 flex justify-center gap-3">
        {plans.map((_, i) => (
          <div 
            key={i} 
            className={cn(
              "h-2.5 rounded-full transition-all duration-300 border-2 border-black",
              i === activeIndex ? "bg-black w-10" : "bg-white w-2.5"
            )} 
          />
        ))}
      </div>
    </div>
  );
}
