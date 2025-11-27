import { useState } from 'react'
import './App.css'

type FormDataType = {
  firstName: string;
  lastName: string;
  email: string;
  age: string;
  city: string;
}

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormDataType>({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    city: "",
  })

  const updateFields = (fields: Partial<FormDataType>) => {
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

      {currentStep === 0 && <div>Step 1 Placeholder</div>}
      {currentStep === 1 && <div>Step 2 Placeholder</div>}
      {currentStep === 2 && <div>Step 3 Placeholder</div>}
      {currentStep === 3 && <div>Step 4 Placeholder</div>}

      <br/>
      <button disabled={currentStep === 0} onClick={prevStep}>Back</button>
      <button disabled={currentStep === 3} onClick={nextStep} style={{ marginLeft: 10 }}>Next</button>
    </div>
  )
}

export default App;
