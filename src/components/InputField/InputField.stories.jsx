import InputField from "./InputField";

export default {
  title: "Components/InputField",
  component: InputField,
};

export const Default = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    helperText: "At least 8 characters",
    variant: "outlined",
    size: "md",
  },
};

export const ErrorState = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    invalid: true,
    errorMessage: "Password is too short",
  },
};

export const Disabled = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    disabled: true,
  },
};
