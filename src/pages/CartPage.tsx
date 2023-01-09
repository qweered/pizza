import React from 'react';
import CartItem from '../components/CartItem';
import { clearCart } from '../redux/slices/cartSlice';
import { useAppDispatch, useAppSelector } from '../redux/store';

const CartPage: React.FC = () => {
  const { totalCount, totalPrice, items } = useAppSelector(
    (state) => state.cart
  );

  const dispatch = useAppDispatch();

  const onClickBasketClear = () => {
    if (window.confirm('Вы уверенны что хотите очистить корзину?')) {
      dispatch(clearCart());
    }
  };

  return (
    <div className="container">
      <div className="flex items-center justify-between mb-6 lg:mb-8">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
          {!(items.length < 1) ? 'Корзина' : 'Склад нулей'}
        </h1>
        {items.length > 0 && (
          <button
            onClick={onClickBasketClear}
            className="inline-flex items-center gap-2 bg-stone-200 py-2 px-5 rounded-xl transition-opacity opacity-50 hover:opacity-100"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.055 6.75002L10.7955 13.5M7.2045 13.5L6.945 6.75002M14.421 4.34252C14.6775 4.38152 14.9325 4.42277 15.1875 4.46702M14.421 4.34327L13.62 14.7548C13.5873 15.1787 13.3958 15.5746 13.0838 15.8635C12.7717 16.1523 12.3622 16.3126 11.937 16.3125H6.063C5.63782 16.3126 5.22827 16.1523 4.91623 15.8635C4.6042 15.5746 4.41269 15.1787 4.38 14.7548L3.579 4.34252M14.421 4.34252C13.5554 4.21166 12.6853 4.11235 11.8125 4.04477M2.8125 4.46627C3.0675 4.42202 3.3225 4.38077 3.579 4.34252M3.579 4.34252C4.4446 4.21166 5.31468 4.11235 6.1875 4.04477M11.8125 4.04477V3.35777C11.8125 2.47277 11.13 1.73477 10.245 1.70702C9.41521 1.6805 8.58479 1.6805 7.755 1.70702C6.87 1.73477 6.1875 2.47352 6.1875 3.35777V4.04477M11.8125 4.04477C9.94029 3.90008 8.05971 3.90008 6.1875 4.04477"
                stroke="#1C1917"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Очистить корзину
          </button>
        )}
      </div>
      {items.length > 0 ? (
        <div className="flex flex-col md:flex-row gap-8 justify-between">
          <div className="flex flex-col gap-4 md:gap-8 w-full md:basis-1/2">
            {items.map((item, idx) => (
              <CartItem key={idx} {...item} />
            ))}
          </div>
          <div className="flex flex-col bg-amber-100 p-5 w-full max-w-md mx-auto md:mx-0 md:basis-1/2">
            <div className="inline-flex items-center uppercase text-lg mb-3">
              <span className="flex-1 h-px bg-stone-900"></span>
              <h4 className="mx-3">Ваш чек</h4>
              <span className="flex-1 h-px bg-stone-900"></span>
            </div>
            <div className="flex flex-col text-sm lg:text-base gap-3">
              <div className="flex">
                <p className="basis-1/2">Наименование</p>
                <p className="flex-1">Кол-во</p>
                <p className="flex-1">Стоимость</p>
              </div>

              <div className="flex flex-col gap-1 text-stone-700">
                {items.map((item, idx) => (
                  <div key={idx} className="flex">
                    <p className="basis-1/2">{item.title}</p>
                    <p className="flex-1">{item.count}.00</p>
                    <p className="flex-1">{item.count * item.price}.00</p>
                  </div>
                ))}
              </div>
              <div className="flex font-bold">
                <p className="basis-1/2">Всего</p>
                <p className="flex-1">{totalCount}.00</p>
                <p className="flex-1">{totalPrice}.00</p>
              </div>
            </div>
            <hr className="my-3 border-dashed border-stone-900" />
            <button className="bg-amber-500 text-stone-50 uppercase text-lg px-10 py-2 self-center rounded-xl">
              Оформить заказ
            </button>
          </div>
        </div>
      ) : (
        <div className="py-24">
          <h2 className="font-bold text-2xl text-center">
            Ваша корзина пока что пуста 🙄
          </h2>
          <p className="text-center opacity-50">
            Пора добавлять пиццы в корзину и оформлять заказ
          </p>
        </div>
      )}
    </div>
  );
};

export default CartPage;
