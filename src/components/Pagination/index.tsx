import React from 'react';
import { setCurrentPage } from '../../redux/slices/sortSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';

interface PaginationProps {
  pagesCount?: number;
}

const Pagination: React.FC<PaginationProps> = ({ pagesCount = 2 }) => {
  const dispatch = useAppDispatch();

  const currentPage = useAppSelector((state) => state.sort.currentPage);

  return (
    <div className="flex justify-center gap-3 mt-7">
      {[...Array(pagesCount)].map((_, idx) => (
        <button
          key={idx}
          className={`bg-amber-500 w-8 h-8 rounded-xl text-stone-50 ${
            currentPage === idx + 1 ? '' : 'opacity-50'
          }`}
          onClick={() => dispatch(setCurrentPage(idx + 1))}
        >
          {idx + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
