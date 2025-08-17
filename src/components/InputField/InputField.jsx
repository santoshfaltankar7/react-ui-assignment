import { useState } from "react";
import { X, Eye, EyeOff } from "lucide-react"; // install lucide-react for icons

export default function InputField({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  variant = "outlined",
  size = "md",
}) {
  const [showPassword, setShowPassword] = useState(false);

  const baseStyles =
    "w-full rounded-md focus:outline-none focus:ring-2 transition";
  const variantStyles = {
    filled: "bg-gray-100 border border-gray-300 focus:ring-blue-500",
    outlined: "border border-gray-400 focus:ring-blue-500",
    ghost: "bg-transparent border-b border-gray-400 focus:ring-blue-500",
  };
  const sizeStyles = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2 text-base",
    lg: "px-4 py-3 text-lg",
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-sm font-medium">{label}</label>}

      <div className="relative flex items-center">
        <input
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            ${baseStyles} 
            ${variantStyles[variant]} 
            ${sizeStyles[size]}
            ${disabled ? "bg-gray-200 cursor-not-allowed" : ""}
            ${invalid ? "border-red-500 focus:ring-red-500" : ""}
          `}
        />

        {/* Optional: Clear button */}
        {value && !disabled && (
          <button
            type="button"
            className="absolute right-8 text-gray-400"
            onClick={() => onChange({ target: { value: "" } })}
          >
            <X size={16} />
          </button>
        )}

        {/* Optional: Password toggle */}
        <button
          type="button"
          className="absolute right-2 text-gray-500"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>

      {/* Helper or error message */}
      {invalid ? (
        <p className="text-red-500 text-sm">{errorMessage}</p>
      ) : (
        helperText && <p className="text-gray-500 text-sm">{helperText}</p>
      )}
    </div>
  );
}
