import ConstructionHeader from "@/components/layout/ConstructionHeader";
import ConstructionFooter from "@/components/layout/ConstructionFooter";
import ConstructionHero from "@/components/sections/ConstructionHero";
import ConstructionCTA from "@/components/sections/ConstructionCTA";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ConstructionHeader />
      <main className="flex-1">
        <ConstructionHero />
        <ConstructionCTA />
      </main>
      <ConstructionFooter />
    </div>
  );
};

export default Index;