/**
 * Feature type definition
 */
export type Feature = {
  id: string;
  title: string;
  image: string;
};

/**
 * Feature definitions for ideation capabilities
 * Each feature has an id, title, and associated image
 */
export const features: Feature[] = [
  {
    id: 'collaborative-documents',
    title: 'Collaborative documents',
    image: '/assets/images/collaborative-documents.png',
  },
  {
    id: 'inline-comments',
    title: 'Inline comments',
    image: '/assets/images/inline-comments.png',
  },
  {
    id: 'text-to-issue-commands',
    title: 'Text-to-issue commands',
    image: '/assets/images/text-to-issue-commands.png',
  },
];
