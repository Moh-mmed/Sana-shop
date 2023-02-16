import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Navbar: React.FC = () => {

  const cart = useSelector((state:any) => state.cart);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a:any, c:any) => a + c.quantity, 0));
  }, [cart.cartItems]);


  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl px-10 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/"className="text-white font-bold text-lg">
              Sana Shop
            </Link>
          </div>
          <div className="flex">
            <Link href="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                login
            </Link>
            <Link href="/cart" className="relative text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>

                {cartItemsCount > 0 && (
                  <span className="absolute top-[-2px] right-[-2px] flex items-center justify-center ml-1 bg-red-600 w-4 h-4 rounded-full text-[10px] leading-4 font-bold text-white">
                    {cartItemsCount}
                  </span>
                )}
            </Link>
          </div>
        </div>
      </div>
    </nav>

    
  );
};

export default Navbar;
