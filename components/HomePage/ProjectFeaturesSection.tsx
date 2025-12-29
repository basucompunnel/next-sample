import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';

function FeatureColumn({ 
  title, 
  description, 
  imageSrc 
}: { 
  title: string; 
  description: string; 
  imageSrc: string; 
}) {
  return (
    <div>
      <h3 className="mb-4 text-2xl font-medium text-white">{title}</h3>
      <p className="mb-8 text-base text-gray-400">{description}</p>
      <Image
        src={getAssetPath(imageSrc)}
        alt={title}
        width={600}
        height={400}
        className="h-auto w-full rounded-lg"
      />
    </div>
  );
}

export default function ProjectFeaturesSection() {
  return (
    <div className="py-24">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="grid gap-24 md:grid-cols-2">
          <FeatureColumn
            title="Manage projects end-to-end"
            description="Consolidate specs, milestones, tasks, and other documentation in one centralized location."
            imageSrc="/assets/images/manage-projects-end-to-end.png"
          />
          <FeatureColumn
            title="Project updates"
            description="Communicate progress and project health with built-in project updates."
            imageSrc="/assets/images/project-updates.png"
          />
        </div>
      </div>
    </div>
  );
}
