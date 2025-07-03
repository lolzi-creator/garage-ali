/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to enable API routes
  // distDir: 'dist', // Using default .next directory
  // trailingSlash: true, // Removed to fix redirect loops
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig; 