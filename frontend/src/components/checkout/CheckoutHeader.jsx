import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const logo = "https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/misscheesecake_logo.avif";

export default function CheckoutHeader() {
  const { itemCount, openCart } = useCart();

  return (
    <div className="flex items-center justify-center py-6 px-8 max-sm:py-4 max-sm:px-5 relative border-b border-[rgba(196,127,110,0.12)]">
      <Link to="/" className="flex items-center no-underline">
        <img src={logo} alt="Miss Cheesecake" className="w-14 h-14 rounded-full" />
        <span className="ml-3 font-[emiken] text-[1.4rem] text-[#FF6B6B]">Miss Cheesecake</span>
      </Link>

      <button
        className="absolute right-8 top-1/2 -translate-y-1/2 bg-none border-none cursor-pointer text-[#C47F6E] transition-colors duration-300 hover:text-[#C8654E]"
        onClick={openCart}
        aria-label="Open cart"
      >
        <div className="relative">
          <ShoppingBag size={22} />
          {itemCount > 0 && (
            <span className="absolute -top-1.5 -right-2 w-[18px] h-[18px] rounded-full bg-[#C8654E] text-white text-[0.65rem] font-[satoshi-bold] flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </div>
      </button>
    </div>
  );
}
