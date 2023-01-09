import React from 'react';
import { IProductItem } from '../../@types/custom';
import { appendToCart, removeFromCart } from '../../redux/slices/cartSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';

const ProductItem: React.FC<IProductItem> = ({
  _id,
  image,
  title,
  description,
  size,
  dough,
  price,
  category,
}) => {
  const [selectedSize, setSelectedSize] = React.useState<string>(size[0]);
  const [selectedDough, setSelectedDough] = React.useState<string>(dough[0]);

  const dispatch = useAppDispatch();

  const addToCart = () => {
    dispatch(
      appendToCart({
        _id: _id,
        image,
        title,
        size: selectedSize,
        dough: selectedDough,
        price,
        count: 1,
      })
    );
  };
  const onClickRemoveFromCart = () => {
    dispatch(removeFromCart({ _id, size: selectedSize, dough: selectedDough }));
  };

  const cartItems = useAppSelector((state) => state.cart.items);
  const isInCart = Boolean(
    cartItems.find(
      (item) =>
        item._id === _id &&
        item.size === selectedSize &&
        item.dough === selectedDough
    )
  );

  return (
    <div className="flex flex-col w-full max-w-xs">
      <img
        src={`./assets/img/products/${image}`}
        alt={title}
        className="mb-4 self-center"
        style={{ maxWidth: 220 }}
      />
      <h4 className="font-bold text-xl leading-none">{title}</h4>
      <p className="opacity-50 mt-1 mb-4 flex-1">{description}</p>
      <div className="bg-stone-100 rounded-md p-0.5 flex justify-between mb-2">
        {size.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedSize(item)}
            className={`${
              selectedSize === item ? 'bg-stone-300' : ''
            } flex-1 py-1 rounded-md transition-colors`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="bg-stone-100 rounded-md p-0.5 flex justify-between">
        {dough.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedDough(item)}
            className={`${
              selectedDough === item ? 'bg-stone-300' : ''
            } flex-1 py-1 rounded-md transition-colors`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-between mt-4">
        <p className="font-bold text-xl">{price} ₴</p>
        {isInCart ? (
          <button
            onClick={onClickRemoveFromCart}
            className="bg-amber-500 inline-flex py-2 px-5 items-center gap-2 text-stone-50 rounded-xl"
          >
            Добавлено{' '}
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.375 10.0625L7.875 14.5625L14.625 4.4375"
                stroke="#FAFAF9"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ) : (
          <button
            onClick={addToCart}
            className="bg-amber-500 inline-flex py-2 px-5 items-center gap-2 text-stone-50 rounded-xl"
          >
            В корзину{' '}
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 3.875V15.125M15.125 9.5H3.875"
                stroke="#FAFAF9"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
