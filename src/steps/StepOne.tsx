// import { ChangeEvent } from "react";
import type { FormData } from "../App";

type StepOneProps = {
    firstName: string;
    lastName: string;
    updateFields: (fields: Partial<FormData>) => void;
}

function StepOne({ firstName, lastName, updateFields }: StepOneProps) {
    return (
        <div>
            <div style={{ marginBottom: "1rem"}}>
                <label>
                    First Name: {" "}
                    <input
                        value={firstName}
                        onChange={(e) => updateFields({ firstName: e.target.value })}
                    />
                </label>
            </div>

            <div>
                <label>
                    Last Name: {" "}
                    <input
                        value={lastName}
                        onChange={(e) => updateFields({ lastName: e.target.value })}
                    />
                </label>
            </div>
        </div>
    );
}

export default StepOne;