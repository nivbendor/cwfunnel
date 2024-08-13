import React, { useEffect } from 'react';
import  LogoSpinner from './LogoSpinner';

interface LandingPageProps {
  onComplete: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <LogoSpinner size={80} />
      <h2 className="mt-4 text-2xl font-semibold">Benefits In A Box</h2>
    </div>
  );
};

export default LandingPage;



// import React from 'react';
// import { motion } from 'framer-motion';

// interface BenefitCalculatorLandingProps {
//   onStart: () => void;
// }

// const BenefitCalculatorLanding: React.FC<BenefitCalculatorLandingProps> = ({ onStart }) => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 font-['Playfair_Display']">
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="bg-white rounded-3xl shadow-lg p-8 max-w-md w-full text-center"
//       >
//         <img src="/cakewalk_logo.png" alt="Cakewalk Logo" className="w-16 h-16 mx-auto mb-6" />
//         <h1 className="text-3xl font-bold mb-4">Benefit Calculator</h1>
//         <p className="text-gray-600 mb-8">Calculate benefits with ease for small business employees</p>
//         <motion.div 
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="mb-8"
//         >
//           <svg className="w-full h-auto" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M10 100 Q 30 95 50 100 T 90 100 T 130 100 T 170 100" stroke="#4A90E2" strokeWidth="4" fill="none" />
//             <rect x="20" y="40" width="140" height="60" fill="#4A90E2" />
//             <rect x="160" y="60" width="30" height="40" fill="#4A90E2" />
//             <circle cx="40" cy="105" r="10" fill="#4A90E2" />
//             <circle cx="160" cy="105" r="10" fill="#4A90E2" />
//           </svg>
//         </motion.div>
//         <motion.button
//           whileHover={{ scale: 1.05, backgroundColor: '#3A7BD5' }}
//           whileTap={{ scale: 0.95 }}
//           className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-lg shadow-md hover:shadow-lg transition duration-300"
//           onClick={onStart}
//         >
//           Get Started
//         </motion.button>
//       </motion.div>
//     </div>
//   );
// };

// export default BenefitCalculatorLanding;


