import type { FormData } from "../App";

type StepFourProps = {
  password: string;
  confirmPassword: string;
  updateFields: (fields: Partial<FormData>) => void;
};

function StepFour({ password, confirmPassword, updateFields }: StepFourProps) {
  return (
    <div>
      <div style={{ marginBottom: "1rem" }}>
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => updateFields({ password: e.target.value })}
          />
        </label>
      </div>

      <div>
        <label>
          Confirm Password:{" "}
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) =>
              updateFields({ confirmPassword: e.target.value })
            }
          />
        </label>
      </div>
    </div>
  );
}

export default StepFour;
