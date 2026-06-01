import Hero from '@/components/Hero';
import LivingSocialExperiment from '@/components/LivingSocialExperiment';
import ManifestoCover from '@/components/ManifestoCover';
import MapPreview from '@/components/MapPreview';
import FeedPreview from '@/components/FeedPreview';
import PapersPreview from '@/components/PapersPreview';
import ExperiencesPreview from '@/components/ExperiencesPreview';
import KnowledgePillars from '@/components/KnowledgePillars';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <LivingSocialExperiment />
      <ManifestoCover />
      <MapPreview />
      <FeedPreview />
      <PapersPreview />
      <ExperiencesPreview />
      <KnowledgePillars />
      <FinalCTA />
    </div>
  );
}
