import React from 'react';
import { ISortByItem } from '../../@types/custom';
import { setCategory, setSortBy } from '../../redux/slices/sortSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';

const categories = [
  'Все',
  'Мясные',
  'Сырные',
  'Гриль',
  'Вегетарианские',
  'Острые',
  'Закрытые',
];

const sortBy: ISortByItem[] = [
  {
    name: 'популярности',
    key: 'rating',
    order: 'desc',
  },
  {
    name: 'новизне',
    key: 'date',
    order: 'desc',
  },
  {
    name: 'цене (сначала дешевые)',
    key: 'price',
    order: 'asc',
  },
  {
    name: 'цене (сначала дорогие)',
    key: 'price',
    order: 'desc',
  },
];

const Sort: React.FC = () => {
  const currentCategory = useAppSelector((state) => state.sort.category);
  const currentSortBy = useAppSelector((state) => state.sort.sortBy);

  const dispatch = useAppDispatch();

  const [isSortByOpen, setIsSortByOpen] = React.useState<boolean>(false);

  return (
    <div className="flex flex-col gap-2 md:flex-row md:gap-4 md:justify-between lg:mt-7">
      <div className="flex overflow-auto gap-2 rounded-xl">
        {categories.map((category, idx) => (
          <button
            key={idx}
            onClick={() => dispatch(setCategory(idx))}
            className={`rounded-xl py-1 px-3 transition-colors lg:py-2 lg:px-5 lg:text-lg ${
              currentCategory === idx
                ? 'bg-stone-700 text-stone-50'
                : 'bg-stone-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <button
        onClick={() => setIsSortByOpen((prev) => !prev)}
        className="inline-flex relative items-center gap-2 self-center flex-shrink-0 lg:text-lg"
      >
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 5.5L8.5 10.5L3.5 5.5"
            stroke="#1C1917"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Сортировать по:
        <span className="text-amber-500 underline">{currentSortBy.name}</span>
        {isSortByOpen && (
          <div className="absolute w-full bg-amber-100 p-3 rounded-xl top-full mt-1 cursor-default">
            <ul>
              {sortBy.map((item, idx) => (
                <li key={idx} className="flex justify-center">
                  <button
                    onClick={() => dispatch(setSortBy(sortBy[idx]))}
                    className="hover:text-amber-500 hover:underline"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </button>
    </div>
  );
};

export default Sort;
