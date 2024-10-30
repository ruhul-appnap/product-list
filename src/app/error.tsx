"use client";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-4 w-full">
      <div className="max-w-md w-full bg-red-500 rounded-lg shadow">
        <div className="bg-destructive/10 text-destructive rounded-lg p-4 mb-4">
          <h2 className="text-lg font-semibold mb-2">Error Loading Products</h2>
          <p className="text-sm">{error.message}</p>
        </div>
        <div className="flex justify-center my-2">
          <button
            onClick={reset}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 text-white"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
