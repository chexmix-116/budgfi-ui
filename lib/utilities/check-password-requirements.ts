export function determinePasswordRequirementFlags(password: string) {
    let passwordRequirementFlags = {
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
        specialCharacter: false,
    };

    if (password.length > 8) passwordRequirementFlags.length = true;
    if (password.match(/[A-Z]/)) passwordRequirementFlags.uppercase = true;
    if (password.match(/[a-z]/)) passwordRequirementFlags.lowercase = true;
    if (password.match(/[0-9]/)) passwordRequirementFlags.number = true;
    if (password.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/))
        passwordRequirementFlags.specialCharacter = true;

    return passwordRequirementFlags;
}