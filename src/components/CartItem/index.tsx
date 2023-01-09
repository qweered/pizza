import React from 'react';
import { ICartItem } from '../../@types/custom';
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
} from '../../redux/slices/cartSlice';
import { useAppDispatch } from '../../redux/store';

const CartItem: React.FC<ICartItem> = ({
  _id,
  title,
  price,
  image,
  size,
  dough,
  count,
}) => {
  const dispatch = useAppDispatch();

  const onClickMinus = () => {
    if (count <= 1) return false;
    dispatch(decreaseCount({ _id, size, dough }));
  };
  const onClickPlus = () => {
    if (count >= 10) return false;
    dispatch(increaseCount({ _id, size, dough }));
  };
  const onClickRemove = () => {
    dispatch(removeFromCart({ _id, size, dough }));
  };

  return (
    <div className="flex">
      <img
        src={`./assets/img/products/${image}`}
        alt=""
        className="w-24 h-24 mr-2"
      />
      <div className="flex flex-col xl:flex-row xl:items-center gap-2 flex-1">
        <div className="flex flex-col xl:flex-1">
          <h4 className="font-bold text-lg leading-none">{title}</h4>
          <p className="opacity-50 text-sm lg:text-base xl:mb-2">
            {size} / {dough}
          </p>
          <div className="inline-flex items-center">
            <button
              onClick={onClickMinus}
              className="w-6 h-6 rounded-full border-stone-900 border inline-flex justify-center items-center"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.375 7H2.625"
                  stroke="#1C1917"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <span className="border-b border-stone-900 mx-1 inline-flex justify-center items-center w-8">
              {count}
            </span>
            <button
              onClick={onClickPlus}
              className="w-6 h-6 rounded-full border-stone-900 border inline-flex justify-center items-center"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 2.625V11.375M11.375 7H2.625"
                  stroke="#1C1917"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col text-sm lg:text-base xl:flex-1">
          <p>
            Цена за шт. - <b className="text-amber-500">{price} ₴</b>
          </p>
          <p>
            Цена за все -{' '}
            <b className="text-amber-500">
              {count} х {price} = {count * price} ₴
            </b>
          </p>
        </div>
      </div>
      <button onClick={onClickRemove} className="self-start lg:self-center">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.625 14.625L21.375 21.375M21.375 14.625L14.625 21.375M31.5 18C31.5 19.7728 31.1508 21.5283 30.4724 23.1662C29.7939 24.8041 28.7995 26.2923 27.5459 27.5459C26.2923 28.7995 24.8041 29.7939 23.1662 30.4724C21.5283 31.1508 19.7728 31.5 18 31.5C16.2272 31.5 14.4717 31.1508 12.8338 30.4724C11.1959 29.7939 9.70765 28.7995 8.45406 27.5459C7.20047 26.2923 6.20606 24.8041 5.52763 23.1662C4.84919 21.5283 4.5 19.7728 4.5 18C4.5 14.4196 5.92232 10.9858 8.45406 8.45406C10.9858 5.92232 14.4196 4.5 18 4.5C21.5804 4.5 25.0142 5.92232 27.5459 8.45406C30.0777 10.9858 31.5 14.4196 31.5 18Z"
            stroke="#1C1917"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default CartItem;
