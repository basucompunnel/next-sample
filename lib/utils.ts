export const getAssetPath = (path: string) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/next-sample' : '';
  return `${basePath}${path}`;
};
