import { Visibility, VisibilityOff } from '@mui/icons-material'
import { IconButton, InputAdornment, TextField as TextFieldMui } from '@mui/material'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

/**
 * Defines the props for the `PasswordField` component.
 *
 * @param {function} onChange - A callback function that is called when the value of the password field changes.
 * @param {string} value - The current value of the password field.
 * @param {boolean} error - A flag indicating whether there is an error with the password field.
 * @param {string} placeholder - The placeholder text to display in the password field.
 * @param {string} helperText - The helper text to display below the password field.
 * @param {string} [label] - The label text for the password field.
 * @param {boolean} [variant] - A flag indicating whether to apply custom styling to the password field.
 * @param {string} [dataTestId] - A data test ID for testing purposes.
 */
export type PasswordFieldProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  error: boolean
  placeholder: string
  helperText: string
  label?: string
  'data-testid'?: string
}
/**
 * Renders a password input field with optional custom styling and a toggle button to show or hide the password.
 * Triggers the onChange callback when the value of the password field changes.
 * Displays an error message and helper text based on the error and helperText props.
 *
 * @param {function} onChange - A callback function that is called when the value of the password field changes.
 * @param {string} value - The current value of the password field.
 * @param {boolean} error - A flag indicating whether there is an error with the password field.
 * @param {string} placeholder - The placeholder text to display in the password field.
 * @param {string} helperText - The helper text to display below the password field.
 * @param {string} [label] - The label text for the password field.
 * @param {string} [dataTestId] - A data test ID for testing purposes.
 * @returns {JSX.Element} - The rendered password field component.
 * @description PasswordField renders a password input field with optional custom styling and a toggle button to show or hide the password.
 *
 * @example
 * ```tsx
 * <PasswordField
 *  onChange={handleChange}
 *  value={password}
 *  error={error}
 *  placeholder="Password"
 *  helperText="Enter your password"
 *  label="Password"
 *  styled={true}
 *  data-testid="password-field"
 * />
 */
export const PasswordField = ({
  onChange,
  value,
  error,
  placeholder,
  helperText,
  label = '',
  'data-testid': dataTestId
}: PasswordFieldProps): JSX.Element => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleClickShowPassword = () => setShowPassword(!showPassword)
  const handleMouseDownPassword = () => setShowPassword(!showPassword)

  return (
    <TextFieldMui
      data-testid={dataTestId}
      fullWidth
      margin="normal"
      type={showPassword ? 'text' : 'password'}
      autoComplete="new-password"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      error={error}
      helperText={helperText}
      label={label}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              data-testid="toggle-password-visibility"
            >
              {showPassword ? (
                <Visibility sx={{ color: '#d0d0d0' }} />
              ) : (
                <VisibilityOff sx={{ color: '#d0d0d0' }} />
              )}
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  )
}

/**
 * Sets the PropTypes for the `PasswordField` component.
 *
 * @param {function} onChange - A callback function that is called when the value of the password field changes.
 * @param {string} value - The current value of the password field.
 * @param {boolean} error - A flag indicating whether there is an error with the password field.
 * @param {string} placeholder - The placeholder text to display in the password field.
 * @param {string} helperText - The helper text to display below the password field.
 * @param {string} [label] - The label text for the password field.
 * @param {string} [dataTestId] - A data test ID for testing purposes.
 */
PasswordField.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  helperText: PropTypes.string.isRequired,
  label: PropTypes.string,
  dataTestId: PropTypes.string
}
