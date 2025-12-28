import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';

function FeatureColumn({
  title,
  description,
  imageSrc,
}: {
  title: string;
  description: string;
  imageSrc: string;
}) {
  return (
    <div className="flex flex-col">
      <h3 className="mb-2 text-2xl font-medium text-white">{title}</h3>
      <p className="mb-8 text-base text-gray-400">{description}</p>
      <div className="flex-1">
        <Image
          src={imageSrc}
          alt={title}
          width={800}
          height={600}
          className="h-auto w-full rounded-lg"
        />
      </div>
    </div>
  );
}

export default function AIFeaturesSection() {
  return (
    <div className="py-24">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="grid gap-24 md:grid-cols-2">
          <FeatureColumn
            title="Self-driving product operations"
            description="Streamline your product development workflows with AI assistance for routine, manual tasks."
            imageSrc={getAssetPath('/assets/images/self-driving-product-operations.png')}
          />
          <FeatureColumn
            title="Linear MCP"
            description="Connect Linear to your favorite tools including Cursor, Claude, ChatGPT, and more."
            imageSrc={getAssetPath('/assets/images/linear-mcp.png')}
          />
        </div>
      </div>
    </div>
  );
}
