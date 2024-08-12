import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LandingPage from './LandingPage';
import '../index.css';

// Define the types here since we can't import from './types'
interface Theme {
  readonly fontSizes: {
    readonly heading: string;
    readonly subheading: string;
    readonly button: string;
  };
}

interface Copy {
  readonly logo: string;
  readonly steps: ReadonlyArray<Step>;
  readonly buttons: {
    readonly next: string;
  };
}

interface StepWithOptions {
  readonly options: ReadonlyArray<string>;
  readonly headline: string;
  readonly subHeadline: string;
  readonly visual: string;
  readonly funFact: string;
}

interface StepWithInput {
  readonly input: 'zip' | 'age' | 'name';
  readonly headline: string;
  readonly subHeadline: string;
  readonly visual: string;
  readonly funFact: string;
}

type Step = StepWithOptions | StepWithInput;

interface FormData {
  hasAccount: boolean | null;
  zipCode: string;
  age: string;
  firstName: string;
  lastName: string;
}

interface BenefitCalculatorProps {
  config: {
    readonly theme: Theme;
    readonly copy: Copy;
  };
}


const BenefitCalculator: React.FC<BenefitCalculatorProps> = ({ config }) => {
  const [step, setStep] = useState<number>(-1);
  const [formData, setFormData] = useState<FormData>({
    hasAccount: null,
    zipCode: '',
    age: '',
    firstName: '',
    lastName: '',
  });
  const [showFunFact, setShowFunFact] = useState(false);

  const { theme, copy } = config;

  useEffect(() => {
    if (step >= 0) {
      const timer = setTimeout(() => setShowFunFact(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData((prevData: FormData) => ({
      ...prevData,
      [name]: type === 'radio' ? value === 'YES' : value,
    }));
  };

  const handleNext = () => {
    if (step < copy.steps.length - 1) {
      setStep((prevStep) => prevStep + 1);
      setShowFunFact(false);
    } else {
      console.log('Form submitted:', formData);
    }
  };

  const isNextDisabled = () => {
    if (step === -1) return false;
    const currentStep = copy.steps[step];
    if ('options' in currentStep) {
      return formData.hasAccount === null;
    }
    if (currentStep.input === 'zip') {
      return !formData.zipCode;
    }
    if (currentStep.input === 'age') {
      return !formData.age;
    }
    return false;
  };

  const renderStepContent = (currentStep: Step) => {
    if ('options' in currentStep) {
      return (
        <div className="space-y-4">
          {currentStep.options.map((option: string) => (
            <label key={option} className="flex items-center space-x-3 p-4 bg-gray-100 rounded-lg cursor-pointer">
              <input
                type="radio"
                name="hasAccount"
                value={option}
                checked={formData.hasAccount === (option === 'YES')}
                onChange={handleInputChange}
                className="form-radio h-6 w-6 text-[#2d5ff1]"
              />
              <span className="text-xl">{option}</span>
            </label>
          ))}
        </div>
      );
    } else {
      return (
        <div className="group">
          <input
            required
            type={currentStep.input === 'age' ? 'number' : 'text'}
            name={currentStep.input}
            value={
              currentStep.input === 'age'
                ? formData.age
                : currentStep.input === 'zip'
                ? formData.zipCode
                : ''
            }
            onChange={handleInputChange}
            className="input"
            min={currentStep.input === 'age' ? 21 : undefined}
            max={currentStep.input === 'age' ? 90 : undefined}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>{currentStep.input === 'zip' ? 'Zip Code' : currentStep.input === 'age' ? 'Age' : 'Name'}</label>
        </div>
      );
    }
  };

  if (step === -1) {
    return <LandingPage onComplete={() => setStep(0)} />;
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="w-full py-4 px-6 flex justify-between items-center border-b">
        <button className="text-2xl">☰</button>
        <h1 className={`text-2xl text-[#2d5ff1]`}>{copy.logo}</h1>
        <div className="flex items-center space-x-4"></div>
      </header>
      <main className="flex-grow flex items-center justify-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md"
          >
            <h2 className={`${theme.fontSizes.heading} text-center mb-4`}>{copy.steps[step].headline}</h2>
            <img src={copy.steps[step].visual} alt="Step illustration" className="w-full mb-6" />
            <p className={`${theme.fontSizes.subheading} text-center mb-8`}>{copy.steps[step].subHeadline}</p>
            
            {renderStepContent(copy.steps[step])}
            
            <button
              onClick={handleNext}
              disabled={isNextDisabled()}
              className={`btn btn-primary w-full ${theme.fontSizes.button}`}
            >
              {copy.buttons.next}
            </button>

            {showFunFact && (
              <p className={`fun-fact ${showFunFact ? 'visible' : ''}`}>
                {copy.steps[step].funFact}
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default BenefitCalculator;