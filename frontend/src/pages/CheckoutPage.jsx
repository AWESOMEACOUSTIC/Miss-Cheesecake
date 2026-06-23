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
  email: '', newsletter: true,
  country: 'India', firstName: '', lastName: '', address: '', apartment: '', city: '', state: '', zip: '', phone: '',
  cardNumber: '', cardExpiry: '', cardCvc: '', cardName: '', billingAddress: '', billingCity: '', billingZip: '',
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

  if (itemCount === 0 && !orderSuccess) {
    return (
      <div className="min-h-screen bg-[#FBF4EE] font-[satoshi]">
        <CheckoutHeader />
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-[#C47F6E]">
          <p className="text-[1.1rem] mb-5">Your cart is empty</p>
          <button
            className="inline-flex items-center gap-2 py-3.5 px-9 rounded-full border-[1.5px] border-[#C8654E] bg-transparent text-[#C8654E] font-[satoshi-bold] text-[0.95rem] uppercase cursor-pointer transition-all duration-400 hover:bg-[#C8654E] hover:text-[#FCEDDE]"
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
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
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
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 2000));
    const orderId = 'MC-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    setOrderNumber(orderId);
    clearCart();
    setOrderSuccess(true);
    setSubmitting(false);
  };

  if (orderSuccess) {
    return (
      <div className="min-h-screen bg-[#FBF4EE] font-[satoshi]">
        <CheckoutHeader />
        <OrderSuccess orderNumber={orderNumber} />
        <div className="py-6 px-12 max-sm:py-5 max-sm:px-4 flex justify-center gap-6 flex-wrap">
          <a href="#" className="font-[satoshi] text-[0.78rem] text-[#C47F6E] underline underline-offset-[3px] transition-colors duration-250 hover:text-[#C8654E]">Refund policy</a>
          <a href="#" className="font-[satoshi] text-[0.78rem] text-[#C47F6E] underline underline-offset-[3px] transition-colors duration-250 hover:text-[#C8654E]">Shipping</a>
          <a href="#" className="font-[satoshi] text-[0.78rem] text-[#C47F6E] underline underline-offset-[3px] transition-colors duration-250 hover:text-[#C8654E]">Privacy policy</a>
          <a href="#" className="font-[satoshi] text-[0.78rem] text-[#C47F6E] underline underline-offset-[3px] transition-colors duration-250 hover:text-[#C8654E]">Terms of service</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBF4EE] font-[satoshi]">
      <CheckoutHeader />

      <div className="grid grid-cols-[1fr_420px] max-w-[1200px] mx-auto min-h-[calc(100vh-105px)] max-[900px]:grid-cols-1">
        {/* Left Column — Forms */}
        <motion.div
          className="py-10 px-12 max-[900px]:py-7 max-[900px]:px-5 max-sm:py-5 max-sm:px-4 border-r border-[rgba(196,127,110,0.1)] max-[900px]:border-r-0 max-[900px]:border-b max-[900px]:border-b-[rgba(196,127,110,0.1)]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ExpressCheckout />
          <ContactSection form={form} onChange={handleChange} errors={errors} />
          <DeliverySection form={form} onChange={handleChange} errors={errors} />
          <ShippingMethod addressFilled={addressFilled} selected={shippingMethod} onSelect={setShippingMethod} />
          <PaymentSection form={form} onChange={handleChange} errors={errors} />

          <motion.button
            className="flex items-center justify-center w-full py-4 px-8 border-none rounded-full bg-gradient-to-br from-[#E8A98F] to-[#C8654E] text-[#FCEDDE] font-[satoshi-bold] text-base tracking-[0.06em] uppercase cursor-pointer mt-6 relative overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_4px_20px_rgba(200,101,78,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(200,101,78,0.45)] active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none btn-sheen"
            onClick={handleSubmit}
            disabled={submitting}
            whileHover={!submitting ? { scale: 1.02 } : {}}
            whileTap={!submitting ? { scale: 0.98 } : {}}
          >
            {submitting ? (
              <span className="w-5 h-5 border-2 border-[rgba(252,237,222,0.4)] border-t-[#FCEDDE] rounded-full animate-spin" />
            ) : (
              'Pay now'
            )}
          </motion.button>
        </motion.div>

        {/* Right Column — Order Summary */}
        <motion.div
          className="py-10 px-9 max-[900px]:py-7 max-[900px]:px-5 max-sm:py-5 max-sm:px-4 bg-[#F6E9DF] relative"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <OrderSummary shippingCost={shippingCost} onApplyDiscount={setDiscountAmount} />
        </motion.div>
      </div>

      <div className="py-6 px-12 max-sm:py-5 max-sm:px-4 flex justify-center gap-6 flex-wrap">
        <a href="#" className="font-[satoshi] text-[0.78rem] text-[#C47F6E] underline underline-offset-[3px] transition-colors duration-250 hover:text-[#C8654E]">Refund policy</a>
        <a href="#" className="font-[satoshi] text-[0.78rem] text-[#C47F6E] underline underline-offset-[3px] transition-colors duration-250 hover:text-[#C8654E]">Shipping</a>
        <a href="#" className="font-[satoshi] text-[0.78rem] text-[#C47F6E] underline underline-offset-[3px] transition-colors duration-250 hover:text-[#C8654E]">Privacy policy</a>
        <a href="#" className="font-[satoshi] text-[0.78rem] text-[#C47F6E] underline underline-offset-[3px] transition-colors duration-250 hover:text-[#C8654E]">Terms of service</a>
        <a href="#" className="font-[satoshi] text-[0.78rem] text-[#C47F6E] underline underline-offset-[3px] transition-colors duration-250 hover:text-[#C8654E]">Cancellations</a>
      </div>
    </div>
  );
}
