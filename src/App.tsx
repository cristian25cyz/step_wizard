import { useState } from 'react'
import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';
import StepThree from './steps/StepThree';
import StepFour from './steps/StepFour';
import './App.css';

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  age: string;
  city: string;
  password: string;
  confirmPassword: string;
}

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  age: "",
  city: "",
  password: "",
  confirmPassword: "",
}

function App() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);

  const updateFields = (fields: Partial<FormData>) => {
    setFormData((prev) => ({
      ...prev,
      ...fields,
    }));
  }

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Step {currentStep + 1} / 4</h1>
      {/* TEMP: show the formData so we see updates later */}
      <pre>{JSON.stringify(formData, null, 2)}</pre>

      {currentStep === 0 && (
        <StepOne
          firstName={formData.firstName}
          lastName={formData.lastName}
          updateFields={updateFields}
        />
      )}

      {currentStep === 1 && (
        <StepTwo
        email={formData.email}
        age={formData.age}
        updateFields={updateFields}
        />
      )}
      {currentStep === 2 && (
        <StepThree
          city={formData.city}
          updateFields={updateFields}
        />
      )}
      {currentStep === 3 && (
        <StepFour
        password={formData.password}
        confirmPassword={formData.confirmPassword}
        updateFields={updateFields}
        />
      )}
    
      <br/>
      <button disabled={currentStep === 0} onClick={prevStep}>Back</button>
      <button disabled={currentStep === 3} onClick={nextStep} style={{ marginLeft: 10 }}>Next</button>
    </div>
  )
}

export default App;
