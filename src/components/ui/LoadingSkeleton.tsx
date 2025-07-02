'use client';

import { motion } from 'framer-motion';

// Car Card Skeleton
export function CarCardSkeleton() {
  return (
    <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl shadow-2xl overflow-hidden">
      {/* Image Skeleton */}
      <div className="relative h-64 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-600/20 to-transparent"
          animate={{
            x: [-300, 300]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        />
        {/* Top badges */}
        <div className="absolute top-4 left-4">
          <div className="w-16 h-6 bg-gray-700 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute top-4 right-4">
          <div className="w-10 h-10 bg-gray-700 rounded-full animate-pulse"></div>
        </div>
        {/* Bottom title */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="w-24 h-6 bg-gray-700 rounded mb-2 animate-pulse"></div>
          <div className="w-32 h-4 bg-gray-600 rounded animate-pulse"></div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Year and engine */}
        <div className="mb-6">
          <div className="w-40 h-4 bg-gray-700 rounded animate-pulse"></div>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-gray-700/30 rounded-lg p-3 text-center">
              <div className="w-16 h-4 bg-gray-600 rounded mb-2 mx-auto animate-pulse"></div>
              <div className="w-12 h-3 bg-gray-700 rounded mx-auto animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-20 h-6 bg-gray-700 rounded-full animate-pulse"></div>
            ))}
            <div className="w-8 h-6 bg-gray-600 rounded animate-pulse"></div>
          </div>
        </div>

        {/* Price and Button */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="w-32 h-8 bg-gray-700 rounded mb-1 animate-pulse"></div>
              <div className="w-16 h-3 bg-gray-600 rounded animate-pulse"></div>
            </div>
          </div>
          <div className="w-full h-12 bg-gray-700 rounded-2xl animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

// Mobile Car Card Skeleton
export function MobileCarCardSkeleton() {
  return (
    <div className="md:hidden bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden">
      <div className="flex h-32">
        {/* Compact Image */}
        <div className="relative w-1/3 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-600/20 to-transparent"
            animate={{
              x: [-100, 100]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          />
          <div className="absolute top-1 left-1">
            <div className="w-8 h-4 bg-gray-700 rounded animate-pulse"></div>
          </div>
        </div>

        {/* Compact Info */}
        <div className="flex-1 p-3 flex flex-col justify-between">
          <div>
            <div className="w-24 h-4 bg-gray-700 rounded mb-1 animate-pulse"></div>
            <div className="w-32 h-3 bg-gray-600 rounded mb-2 animate-pulse"></div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="w-20 h-5 bg-gray-700 rounded animate-pulse"></div>
            <div className="w-16 h-6 bg-gray-700 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Search Bar Skeleton
export function SearchBarSkeleton() {
  return (
    <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl shadow-2xl p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search Input */}
        <div className="flex-1 relative">
          <div className="w-6 h-6 bg-gray-700 rounded absolute left-3 top-1/2 transform -translate-y-1/2 animate-pulse"></div>
          <div className="w-full h-12 bg-gray-800/50 border border-gray-600/50 rounded-xl pl-10 animate-pulse"></div>
        </div>

        {/* Filter Button */}
        <div className="w-24 h-12 bg-gray-800/50 border border-gray-600/50 rounded-xl animate-pulse"></div>
      </div>
    </div>
  );
}

// Page Header Skeleton
export function PageHeaderSkeleton() {
  return (
    <div className="text-center mb-12">
      <div className="w-64 h-16 bg-gray-700 rounded mb-6 mx-auto animate-pulse"></div>
      <div className="w-96 h-6 bg-gray-600 rounded mx-auto animate-pulse"></div>
    </div>
  );
}

// Loading Grid Skeleton
export function LoadingGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <CarCardSkeleton />
        </motion.div>
      ))}
    </div>
  );
}

// Results Counter Skeleton
export function ResultsCounterSkeleton() {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="w-32 h-5 bg-gray-700 rounded animate-pulse"></div>
    </div>
  );
} 