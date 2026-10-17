import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { ProblemSection } from "@/components/problem-section";
import { PrinciplesSection } from "@/components/principles-section";
import { SkillsExplorer } from "@/components/skills-explorer";
import { LifecycleSection } from "@/components/lifecycle-section";
import { AudienceSection } from "@/components/audience-section";
import { RoadmapSection } from "@/components/roadmap-section";
import { SiteFooter } from "@/components/site-footer";

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <ProblemSection />
      <PrinciplesSection />
      <SkillsExplorer />
      <LifecycleSection />
      <AudienceSection />
      <RoadmapSection />
      <SiteFooter />
    </main>
  );
}
