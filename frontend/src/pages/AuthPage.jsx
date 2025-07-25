import sharktank from "../assets/images/Sharktank.jpg"
import logo from "../assets/images/misscheesecake_logo.png"
import AuthForm from '../components/AuthForm';
import { motion } from 'framer-motion';

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
                className="md:w-1/2 w-full flex flex-col justify-center items-center px-6 md:px-10 py-10"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="w-full max-w-md">
                    <img src={logo} alt="Logo" className="w-26 h-26 mb-6" />
                    <h2 className="text-2xl font-semibold mb-6">
                        {isLogin ? 'Welcome back!' : 'Create an account'}
                    </h2>
                    <AuthForm mode={mode} />
                </div>
            </motion.div>
        </div>
    );
}
