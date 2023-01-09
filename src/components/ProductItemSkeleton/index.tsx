import React from 'react';

const ProductItemSkeleton: React.FC = () => {
  return (
    <div className="pulse-animation w-full max-w-xs flex flex-col">
      <div className="w-56 h-56 bg-stone-200 mb-4 self-center rounded-full"></div>
      <div className="w-48 h-7 bg-stone-200"></div>
      <div className="w-full h-20 bg-stone-200 mt-1 mb-4"></div>
      <div className="h-9 w-full bg-stone-200 rounded-md mb-2"></div>
      <div className="h-9 w-full bg-stone-200 rounded-md"></div>
      <div className="flex w-full items-center justify-between mt-4">
        <div className="w-24 h-7 bg-stone-200"></div>
        <div className="w-36 h-10 bg-stone-200 rounded-xl"></div>
      </div>
    </div>
  );
};

export default ProductItemSkeleton;
