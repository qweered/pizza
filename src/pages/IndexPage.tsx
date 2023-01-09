import React from 'react';

import { useAppSelector } from '../redux/store';

import Sort from '../components/Sort';
import Grid from '../components/Grid';
import ProductItem from '../components/ProductItem';
import ProductItemSkeleton from '../components/ProductItemSkeleton';
import Pagination from '../components/Pagination';

const IndexPage: React.FC = () => {
  const { products, status } = useAppSelector((state) => state.products);
  const query = useAppSelector((state) => state.sort.query);

  return (
    <div className="container">
      <Sort />
      <h1 className="my-4 font-bold text-2xl md:text-3xl lg:text-4xl lg:my-8">
        {status === 'loading'
          ? 'Загрузка...'
          : !(products.length < 1)
          ? query
            ? `Поиск по запросу: '${query}'`
            : 'Все пиццы'
          : 'По вашим критериям ничего не найдено 😔'}
      </h1>
      <Grid>
        {status === 'success' && products.length > 0
          ? products.map((product) => (
              <ProductItem key={product._id} {...product} />
            ))
          : [...Array(16)].map((item, idx) => (
              <ProductItemSkeleton key={idx} />
            ))}
      </Grid>
      <Pagination />
    </div>
  );
};

export default IndexPage;
