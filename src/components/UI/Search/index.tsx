import React from 'react';
import { setQuery } from '../../../redux/slices/sortSlice';

import { useAppDispatch } from '../../../redux/store';

import debounce from '../../../utils/debounce';

const Search: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState<string>('');

  const dispatch = useAppDispatch();

  // eslint-disable-next-line
  const updateQuery = React.useCallback(
    debounce((query: string) => {
      dispatch(setQuery(query));
    }, 500),
    []
  );

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    updateQuery(event.target.value);
  };

  return (
    <input
      type="text"
      style={{
        backgroundImage: `url('./assets/img/icons/search-icon.svg')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '20px center',
      }}
      placeholder={'Поиск...'}
      onChange={onSearchChange}
      value={searchValue}
      className="py-2 pl-12 pr-2 bg-amber-50 border-stone-900 border rounded-xl "
    />
  );
};

export default Search;
