import heroImg from "@/assets/asof-hero.jpg";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--pointer-x", `${x}%`);
      el.style.setProperty("--pointer-y", `${y}%`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-hero">
      <div className="container mx-auto py-20 md:py-28 grid md:grid-cols-2 items-center gap-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            ASOFT — Advanced School ERP for Zimbabwe
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
            The AI-driven platform to modernise, digitise and automate school operations — from students and staff to finance, assets and analytics.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button variant="hero" size="lg">Start Free Trial</Button>
            <Button variant="outline" size="lg">See Pricing</Button>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">Cloud-based • Multi-currency • Secure • Works everywhere</p>
        </div>
        <div className="relative">
          <div className="surface-glass rounded-xl p-3 card-elevated">
            <img src={heroImg} alt="ASOFT dashboard with analytics, attendance, finance and timetable widgets for Zimbabwean schools" className="rounded-lg w-full h-auto" loading="eager" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
