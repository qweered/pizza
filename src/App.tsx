import React from 'react';
import { Route, Routes } from 'react-router-dom';

// import Footer from './components/Footer';
import Header from './components/Header';

import { useAppDispatch, useAppSelector } from './redux/store';
import { fetchProducts } from './redux/slices/productsSlice';

import IndexPage from './pages/IndexPage';
import CartPage from './pages/CartPage';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  const sort = useAppSelector((state) => state.sort);

  React.useEffect(() => {
    window.scroll(0, 0);
    dispatch(fetchProducts(16));
  }, [sort, dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;
