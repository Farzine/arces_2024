// src/app/about/accommodation/page.tsx
import Link from 'next/link';

export default function Accommodation() {
  return (
    <main className="h-screen flex flex-col justify-center items-center bg-white">
      <h1 className="text-3xl font-semibold mb-4">Accommodation</h1>
      <p className="text-lg text-gray-600 mb-6">
        We will announce the accommodation details soon.
      </p>
      <Link
        href="/" // Update with the actual route you want to navigate to
        className="px-6 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
      >
        Continue
      </Link>
    </main>
  );
}
