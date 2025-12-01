import type { FormData } from "../App";

type StepTwoProps = {
  email: string;
  age: string;
  updateFields: (fields: Partial<FormData>) => void;
};

function StepTwo({ email, age, updateFields }: StepTwoProps) {
  return (
    <div>
      <div style={{ marginBottom: "1rem" }}>
        <label>
          Email:{" "}
          <input
            type="email"
            value={email}
            onChange={(e) => updateFields({ email: e.target.value })}
          />
        </label>
      </div>

      <div>
        <label>
          Age:{" "}
          <input
            type="number"
            value={age}
            onChange={(e) => updateFields({ age: e.target.value })}
          />
        </label>
      </div>
    </div>
  );
}

export default StepTwo;