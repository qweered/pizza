import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';
import Search from '../UI/Search';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const [currentWidth, setCurrentWidth] = React.useState<number>(0);

  React.useEffect(() => {
    const getCurrentWidth = () => {
      setCurrentWidth(window.innerWidth);
    };
    getCurrentWidth();

    window.addEventListener('resize', getCurrentWidth);

    return () => window.removeEventListener('resize', getCurrentWidth);
  }, []);

  const onClickMenuButton = () => setIsMenuOpen((prev) => !prev);

  const { pathname } = useLocation();

  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const { totalCount, totalPrice } = useAppSelector((state) => state.cart);

  return (
    <header className="py-6">
      <div className="container flex items-center justify-between">
        <div className="flex gap-24 items-center">
          <Link to={'/'} className="flex items-center">
            <img src="./assets/img/logo.svg" alt="Logo" className="mr-2" />
            <div>
              <h4 className="uppercase font-bold text-lg leading-none md:text-xl">
                React Pizza
              </h4>
              <p className="text-xs opacity-50 md:text-base md:leading-none">
                лучшая пицца в вашем селе
              </p>
            </div>
          </Link>
          {currentWidth >= 1024 && pathname === '/' && <Search />}
        </div>
        <div
          className={`fixed left-0 top-0 w-full h-full bg-stone-900 bg-opacity-75 z-10 transition-opacity ${
            isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
          }`}
        ></div>
        <nav
          className={`fixed md:relative md:right-auto md:flex-row md:bg-transparent md:p-0 md:max-w-none md:items-center bg-amber-100 w-full md:w-auto h-full top-0 z-20 transition-position pt-24 px-4 flex flex-col gap-4 lg:gap-8 max-w-xs ${
            isMenuOpen ? 'right-0' : '-right-full'
          }`}
        >
          {currentWidth < 1024 && pathname === '/' && <Search />}
          <Link
            to={'/cart'}
            className="bg-amber-500 mt-4 md:mt-0 flex items-center justify-center text-stone-50 gap-2 py-2 lg:py-1 px-4 rounded-xl"
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.9375 2.75H2.977C3.3595 2.75 3.69325 3.00725 3.79225 3.37625L4.0795 4.454M5.875 11.1875C5.27826 11.1875 4.70597 11.4246 4.28401 11.8465C3.86205 12.2685 3.625 12.8408 3.625 13.4375H15.4375M5.875 11.1875H14.2885C15.1293 9.4625 15.8635 7.6745 16.4815 5.834C12.4315 4.80136 8.25748 4.33692 4.0795 4.454M5.875 11.1875L4.0795 4.454M4.75 15.6875C4.75 15.8367 4.69074 15.9798 4.58525 16.0852C4.47976 16.1907 4.33668 16.25 4.1875 16.25C4.03832 16.25 3.89524 16.1907 3.78975 16.0852C3.68426 15.9798 3.625 15.8367 3.625 15.6875C3.625 15.5383 3.68426 15.3952 3.78975 15.2898C3.89524 15.1843 4.03832 15.125 4.1875 15.125C4.33668 15.125 4.47976 15.1843 4.58525 15.2898C4.69074 15.3952 4.75 15.5383 4.75 15.6875V15.6875ZM14.3125 15.6875C14.3125 15.8367 14.2532 15.9798 14.1477 16.0852C14.0423 16.1907 13.8992 16.25 13.75 16.25C13.6008 16.25 13.4577 16.1907 13.3523 16.0852C13.2468 15.9798 13.1875 15.8367 13.1875 15.6875C13.1875 15.5383 13.2468 15.3952 13.3523 15.2898C13.4577 15.1843 13.6008 15.125 13.75 15.125C13.8992 15.125 14.0423 15.1843 14.1477 15.2898C14.2532 15.3952 14.3125 15.5383 14.3125 15.6875V15.6875Z"
                stroke="#FAFAF9"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="inline-flex gap-2 items-center md:hidden lg:inline-flex">
              {totalPrice} ₴ <span className="w-0.5 h-3 bg-stone-50" />{' '}
              {totalCount}
            </span>
          </Link>
          <Link
            to={'/cabinet'}
            className="bg-amber-500 flex items-center justify-center text-stone-50 gap-2 py-2 lg:py-1 px-4 rounded-xl"
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0625 5C12.0625 5.74592 11.7662 6.46129 11.2387 6.98874C10.7113 7.51618 9.9959 7.8125 9.24998 7.8125C8.50406 7.8125 7.78869 7.51618 7.26124 6.98874C6.7338 6.46129 6.43748 5.74592 6.43748 5C6.43748 4.25408 6.7338 3.53871 7.26124 3.01126C7.78869 2.48382 8.50406 2.1875 9.24998 2.1875C9.9959 2.1875 10.7113 2.48382 11.2387 3.01126C11.7662 3.53871 12.0625 4.25408 12.0625 5V5ZM3.62573 15.5885C3.64983 14.1128 4.25299 12.7056 5.30512 11.6705C6.35724 10.6354 7.77405 10.0554 9.24998 10.0554C10.7259 10.0554 12.1427 10.6354 13.1948 11.6705C14.247 12.7056 14.8501 14.1128 14.8742 15.5885C13.1098 16.3976 11.1911 16.8151 9.24998 16.8125C7.24298 16.8125 5.33798 16.3745 3.62573 15.5885Z"
                stroke="#FAFAF9"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="md:hidden lg:block">Личный кабинет</span>
          </Link>
        </nav>
        <button
          onClick={onClickMenuButton}
          className={`md:hidden burger outline-none relative inline-flex flex-col w-7 h-5 items-stretch z-20 justify-between ${
            isMenuOpen ? 'active' : ''
          }`}
        >
          <span className="h-0.5 bg-stone-900 w-full transition-transform"></span>
          <span className="h-0.5 bg-stone-900 w-full transition-transform"></span>
          <span className="h-0.5 bg-stone-900 w-full"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
