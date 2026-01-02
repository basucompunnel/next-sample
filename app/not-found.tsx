'use client';

import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-6">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-white">404</h1>
        <h2 className="mb-6 text-2xl font-semibold text-white">Page not found</h2>
        <p className="mb-8 text-lg text-gray-400">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => router.push('/')}
          className="rounded-lg bg-white px-6 py-3 text-base font-medium text-black transition-all duration-300 hover:bg-gray-200 hover:scale-105 hover:shadow-lg cursor-pointer"
        >
          Go back home
        </button>
      </div>
    </div>
  );
}
