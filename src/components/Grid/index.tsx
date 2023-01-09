import React from 'react';

interface GridProps {
  children: any;
}

const Grid: React.FC<GridProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-8">
      {children}
    </div>
  );
};

export default Grid;
