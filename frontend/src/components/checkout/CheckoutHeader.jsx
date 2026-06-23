import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const logo = "https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/misscheesecake_logo.avif";

export default function CheckoutHeader() {
  const { itemCount, openCart } = useCart();

  return (
    <div className="checkout-brand-header">
      <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <img src={logo} alt="Miss Cheesecake" className="checkout-brand-logo" />
        <span className="checkout-brand-name">Miss Cheesecake</span>
      </Link>

      <button
        className="checkout-cart-link"
        onClick={openCart}
        aria-label="Open cart"
      >
        <div style={{ position: 'relative' }}>
          <ShoppingBag size={22} />
          {itemCount > 0 && (
            <span
              style={{
                position: 'absolute',
                top: -6,
                right: -8,
                width: 18,
                height: 18,
                borderRadius: '50%',
                background: '#C8654E',
                color: '#FFF',
                fontSize: '0.65rem',
                fontFamily: 'satoshi-bold, sans-serif',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {itemCount}
            </span>
          )}
        </div>
      </button>
    </div>
  );
}
