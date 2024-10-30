import React from "react";

function ProductSkeleton() {
  return (
    <div className="container mx-auto py-8">
      <div className="h-8 w-48 bg-gray-200 rounded-md mb-8 animate-pulse" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md relative"
            role="status"
          >
            <div className="absolute top-2 left-2 z-10 h-6 w-16 bg-gray-200 rounded-md animate-pulse" />

            <div className="absolute top-2 right-2 z-10 h-8 w-8 bg-gray-200 rounded-full animate-pulse" />

            <div className="relative">
              <div className="w-full aspect-square bg-gray-200 rounded-t-lg animate-pulse" />
            </div>

            <div className="p-4 space-y-3">
              <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />

              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse" />
              </div>

              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductSkeleton;
