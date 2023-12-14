import SearchIcon from '@mui/icons-material/Search'
import { Autocomplete, Box, InputAdornment, TextField, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

import { SelectValueProps } from '@/types'

/**
 * Defines the props for the `Select` component.
 *
 * @param {SelectValueProps | null} value - The currently selected value.
 * @param {React.Dispatch<React.SetStateAction<SelectValueProps | null>>} setValue - A function to update the selected value.
 * @param {SelectValueProps[]} options - An array of options to be displayed in the autocomplete dropdown.
 * @param {string} placeholder - The placeholder text to be displayed in the input field.
 * @param {string} helperText - The helper text to be displayed below the input field.
 * @param {boolean} error - Indicates whether there is an error with the input field.
 * @param {boolean} disableCreateOption - If true, disables the ability to create new options.
 * @param {string} dataTestId - A data-testid attribute for testing purposes.
 * @param {boolean} disabled - Indicates whether the input field is disabled.
 * @param {React.Dispatch<React.SetStateAction<string>>} customSetInput - A function to handle custom input changes.
 */
export type SelectProps = {
  value: SelectValueProps | null
  setValue: React.Dispatch<React.SetStateAction<SelectValueProps | null>>
  options: SelectValueProps[]
  placeholder?: string
  helperText?: string
  error?: boolean
  'data-testid'?: string
  disabled?: boolean
}

/**
 * Renders a styled autocomplete input field.
 *
 * @param {SelectValueProps | null} value - The currently selected value.
 * @param {React.Dispatch<React.SetStateAction<SelectValueProps | null>>} setValue - A function to update the selected value.
 * @param {SelectValueProps[]} options - An array of options to be displayed in the autocomplete dropdown.
 * @param {string} placeholder - The placeholder text to be displayed in the input field.
 * @param {string} helperText - The helper text to be displayed below the input field.
 * @param {boolean} error - Indicates whether there is an error with the input field.
 * @param {boolean} disableCreateOption - If true, disables the ability to create new options.
 * @param {string} dataTestId - A data-testid attribute for testing purposes.
 * @param {boolean} disabled - Indicates whether the input field is disabled.
 * @param {React.Dispatch<React.SetStateAction<string>>} customSetInput - A function to handle custom input changes.
 *
 * @returns {JSX.Element} - The rendered Select component.
 *
 * @description This component renders a styled autocomplete input field.
 *
 * @example
 * ```tsx
 * <Select
 *  value={value}
 *  setValue={setValue}
 *  options={options}
 *  placeholder="Placeholder"
 *  helperText="Helper text"
 *  error={false}
 *  disableCreateOption={true}
 *  dataTestId="select"
 *  disabled={false}
 *  customSetInput={customSetInput}
 * />
 */
export const Select = ({
  value,
  setValue,
  options,
  placeholder,
  helperText,
  error,
  'data-testid': dataTestId,
  disabled
}: SelectProps): JSX.Element => {
  const [input, setInput] = useState<string>('')

  return (
    <Autocomplete
      disabled={disabled ?? false}
      data-testid={dataTestId}
      value={value}
      getOptionLabel={(option) => (option as SelectValueProps).name}
      onChange={(event, newValue) => setValue(newValue as SelectValueProps)}
      sx={{ width: '100%' }}
      inputValue={input}
      onInputChange={(event, newInputValue) => setInput(newInputValue)}
      options={options}
      renderInput={(params) => (
        <TextField
          {...params}
          error={error}
          helperText={helperText ?? ''}
          variant="outlined"
          placeholder={placeholder ?? ''}
          inputProps={{
            ...params.inputProps,
            style: { textTransform: 'capitalize' }
          }}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
      )}
      renderOption={(props, option: any) => (
        <Box component="li" {...props} key={option.id}>
          <Typography textTransform="capitalize">{option.name}</Typography>
        </Box>
      )}
      isOptionEqualToValue={(option: any, value: any) =>
        option?.name?.toLowerCase() === value?.name?.toLowerCase()
      }
    />
  )
}

/**
 * Defines the prop types for the `Select` component.
 *
 * @param {SelectValueProps | null} value - The currently selected value.
 * @param {React.Dispatch<React.SetStateAction<SelectValueProps | null>>} setValue - A function to update the selected value.
 * @param {SelectValueProps[]} options - An array of options to be displayed in the autocomplete dropdown.
 * @param {string} placeholder - The placeholder text to be displayed in the input field.
 * @param {string} helperText - The helper text to be displayed below the input field.
 * @param {boolean} error - Indicates whether there is an error with the input field.
 * @param {boolean} disableCreateOption - If true, disables the ability to create new options.
 * @param {string} dataTestId - A data-testid attribute for testing purposes.
 * @param {boolean} disabled - Indicates whether the input field is disabled.
 * @param {React.Dispatch<React.SetStateAction<string>>} customSetInput - A function to handle custom input changes.
 */
Select.propTypes = {
  value: PropTypes.object,
  setValue: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  'data-testid': PropTypes.string,
  disabled: PropTypes.bool
}
