namespace App {
  // Valildation
  export interface Valildatable {
    value: string | number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
  }

  export function validate(valildatableInput: Valildatable) {
    let isValid = true;

    if (valildatableInput.required) {
      isValid =
        isValid && valildatableInput.value.toString().trim().length !== 0;
    }

    if (
      valildatableInput.minLength != null &&
      typeof valildatableInput.value === "string"
    ) {
      isValid =
        isValid &&
        valildatableInput.value.length >= valildatableInput.minLength;
    }

    if (
      valildatableInput.maxLength != null &&
      typeof valildatableInput.value === "string"
    ) {
      isValid =
        isValid &&
        valildatableInput.value.length <= valildatableInput.maxLength;
    }

    if (
      valildatableInput.min != null &&
      typeof valildatableInput.value === "number"
    ) {
      isValid = isValid && valildatableInput.value >= valildatableInput.min;
    }

    if (
      valildatableInput.max != null &&
      typeof valildatableInput.value === "number"
    ) {
      isValid = isValid && valildatableInput.value <= valildatableInput.max;
    }

    return isValid;
  }
}
