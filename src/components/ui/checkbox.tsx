"use client"

import * as React from "react"
import { Check } from "lucide-react"

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onCheckedChange?: (checked: boolean) => void
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, onCheckedChange, checked, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          ref={ref}
          checked={checked}
          onChange={(e) => onCheckedChange?.(e.target.checked)}
          {...props}
        />
        <div
          className={`w-4 h-4 rounded border-2 flex items-center justify-center cursor-pointer transition-colors ${
            checked ? "bg-purple-600 border-purple-600" : "border-gray-300 bg-white hover:border-gray-400"
          } ${className || ""}`}
          onClick={() => onCheckedChange?.(!checked)}
        >
          {checked && <Check className="w-3 h-3 text-white" />}
        </div>
      </div>
    )
  },
)
Checkbox.displayName = "Checkbox"

export { Checkbox }
