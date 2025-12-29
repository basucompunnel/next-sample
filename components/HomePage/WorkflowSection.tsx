import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';

function WorkflowColumn({ 
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

export default function WorkflowSection() {
  return (
    <div className="py-24">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="grid gap-24 md:grid-cols-2">
          <WorkflowColumn
            title="Build momentum with Cycles"
            description="Create healthy routines and focus your team on what work should happen next."
            imageSrc="/assets/images/build-momentum-with-cycles.png"
          />
          <WorkflowColumn
            title="Manage incoming work with Triage"
            description="Review and assign incoming bug reports, feature requests, and other unplanned work."
            imageSrc="/assets/images/manage-incoming-work-with-triage.png"
          />
        </div>
      </div>
    </div>
  );
}
