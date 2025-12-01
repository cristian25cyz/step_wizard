import type { FormData } from "../App";

type StepThreeProps = {
  city: string;
  updateFields: (fields: Partial<FormData>) => void;
};

function StepThree({ city, updateFields }: StepThreeProps) {
  return (
    <div>
      <div style={{ marginBottom: "1rem" }}>
        <label>
          City:{" "}
          <input
            value={city}
            onChange={(e) => updateFields({ city: e.target.value })}
          />
        </label>
      </div>
    </div>
  );
}

export default StepThree;