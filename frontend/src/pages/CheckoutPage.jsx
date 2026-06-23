import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';
import CheckoutHeader from '../components/checkout/CheckoutHeader';
import ExpressCheckout from '../components/checkout/ExpressCheckout';
import ContactSection from '../components/checkout/ContactSection';
import DeliverySection from '../components/checkout/DeliverySection';
import ShippingMethod, { SHIPPING_METHODS } from '../components/checkout/ShippingMethod';
import PaymentSection from '../components/checkout/PaymentSection';
import OrderSummary from '../components/checkout/OrderSummary';
import OrderSuccess from '../components/checkout/OrderSuccess';
import '../components/checkout/Checkout.css';

const INITIAL_FORM = {
  // Contact
  email: '',
  newsletter: true,
  // Delivery
  country: 'India',
  firstName: '',
  lastName: '',
  address: '',
  apartment: '',
  city: '',
  state: '',
  zip: '',
  phone: '',
  // Payment
  cardNumber: '',
  cardExpiry: '',
  cardCvc: '',
  cardName: '',
  billingAddress: '',
  billingCity: '',
  billingZip: '',
};

export default function CheckoutPage() {
  const { items, itemCount, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [shippingMethod, setShippingMethod] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  // Redirect if cart is empty and not on success
  if (itemCount === 0 && !orderSuccess) {
    return (
      <div className="checkout-page">
        <CheckoutHeader />
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          fontFamily: 'satoshi, sans-serif',
          color: '#C47F6E',
        }}>
          <p style={{ fontSize: '1.1rem', marginBottom: 20 }}>Your cart is empty</p>
          <button
            className="empty-cart-cta"
            onClick={() => navigate('/')}
          >
            Go Shopping
          </button>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const addressFilled = !!(form.address && form.city && form.state && form.zip);

  const shippingCost = useMemo(() => {
    const method = SHIPPING_METHODS.find((m) => m.id === shippingMethod);
    return method ? method.price : 0;
  }, [shippingMethod]);

  const validate = () => {
    const newErrors = {};
    if (!form.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Enter a valid email';
    if (!form.lastName) newErrors.lastName = 'Last name is required';
    if (!form.address) newErrors.address = 'Address is required';
    if (!form.city) newErrors.city = 'City is required';
    if (!form.zip) newErrors.zip = 'PIN code is required';
    return newErrors;
  };

  const handleSubmit = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);

    // Simulate payment processing
    await new Promise((r) => setTimeout(r, 2000));

    const orderId = 'MC-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    setOrderNumber(orderId);
    clearCart();
    setOrderSuccess(true);
    setSubmitting(false);
  };

  if (orderSuccess) {
    return (
      <div className="checkout-page">
        <CheckoutHeader />
        <OrderSuccess orderNumber={orderNumber} />
        <div className="checkout-footer">
          <a href="#">Refund policy</a>
          <a href="#">Shipping</a>
          <a href="#">Privacy policy</a>
          <a href="#">Terms of service</a>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <CheckoutHeader />

      <div className="checkout-layout">
        {/* Left Column — Forms */}
        <motion.div
          className="checkout-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ExpressCheckout />
          <ContactSection form={form} onChange={handleChange} errors={errors} />
          <DeliverySection form={form} onChange={handleChange} errors={errors} />
          <ShippingMethod
            addressFilled={addressFilled}
            selected={shippingMethod}
            onSelect={setShippingMethod}
          />
          <PaymentSection form={form} onChange={handleChange} errors={errors} />

          <motion.button
            className="pay-now-btn"
            onClick={handleSubmit}
            disabled={submitting}
            whileHover={!submitting ? { scale: 1.02 } : {}}
            whileTap={!submitting ? { scale: 0.98 } : {}}
          >
            {submitting ? (
              <span className="checkout-spinner" />
            ) : (
              'Pay now'
            )}
          </motion.button>
        </motion.div>

        {/* Right Column — Order Summary */}
        <motion.div
          className="checkout-right"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <OrderSummary
            shippingCost={shippingCost}
            onApplyDiscount={setDiscountAmount}
          />
        </motion.div>
      </div>

      <div className="checkout-footer">
        <a href="#">Refund policy</a>
        <a href="#">Shipping</a>
        <a href="#">Privacy policy</a>
        <a href="#">Terms of service</a>
        <a href="#">Cancellations</a>
      </div>
    </div>
  );
}
