import sharktank from "../assets/images/Sharktank.avif"
import noodle from '../assets/images/noodle_illustration.avif'
import logo from "../assets/images/misscheesecake_logo.avif"
import AuthForm from '../components/AuthForm';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function AuthPage({ mode }) {
    const isLogin = mode === 'login';
    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="md:w-1/2 w-full h-80 md:h-full bg-gray-100 flex items-center justify-center relative">

                <img
                    src={sharktank}
                    alt="sharktank Background"
                    className="w-full h-full object-cover md:object-left"
                />

            </div>
            <motion.div
                className="md:w-1/2 relative w-full bg-[#F6E0DE] flex flex-col justify-center items-center px-6 md:px-10 py-10"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <img
                    src={noodle}
                    alt="Noodle Illustration"
                    className="
                          absolute inset-0
                          w-full h-full
                          object-cover object-center
                          opacity-5
                          z-0
                          pointer-events-none
                          select-none
                        "
                />
                <div className="w-full max-w-md z-10">
                    <img src={logo} alt="Logo" className="w-26 h-26 mb-6" />
                    {isLogin ? (
                        <h5  className="text-green-700 mb-1 md:mb-2 font-[saans]">
                            <span className='text-black'>Log In</span>
                        </h5>
                    ) : (
                        <h5 className="text-green-700 mb-1 md:mb-2">
                            <span className='text-black'>Sign Up</span>
                        </h5>
                    )}
                    <AuthForm mode={mode} />
                </div>
            </motion.div>
        </div>
    );
}
