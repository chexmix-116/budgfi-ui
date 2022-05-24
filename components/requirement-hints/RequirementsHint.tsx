import Image from "next/image";
import React, { ReactElement, useEffect } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import RequirementHint from "./RequirementHint";

type PasswordRequirementFlag =
    | "length"
    | "uppercase"
    | "lowercase"
    | "number"
    | "specialCharacter";
interface Props {
    requirementFlags: {
        length: boolean;
        uppercase: boolean;
        lowercase: boolean;
        number: boolean;
        specialCharacter: boolean;
    };
}

// p {
//     font-size: 15px;
//     color: ${props => props.theme.colors.darkGray}
// }

export default function RequirementsHint({
    requirementFlags,
}: Props): ReactElement {
    const passwordRequirements: PasswordRequirementFlag[] = [
        "length",
        "uppercase",
        "lowercase",
        "number",
        "specialCharacter",
    ];

    const passwordRequirementMapping = {
        length: "At least 8 characters - the more characters, the better",
        specialCharacter: "At least one special character",
        uppercase: "At least one uppercase letter",
        lowercase: "At least one lowercase letter",
        number: "At least one number",
    };

    useEffect(() => {}, []);

    return (
        <div>
            <p style={{ fontSize: '18px'}}>Password Requirements</p>
            <ul className="ps-4">
                {passwordRequirements.map((_requirement) => (
                    <li key={_requirement} className="mb-1">
                        <RequirementHint
                            name={passwordRequirementMapping[_requirement]}
                            isActive={requirementFlags[_requirement]}
                        ></RequirementHint>
                    </li>
                ))}
            </ul>
        </div>
    );
}
