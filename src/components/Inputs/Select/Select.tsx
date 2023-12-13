import SearchIcon from '@mui/icons-material/Search'
import {
  Autocomplete,
  Box,
  createFilterOptions,
  InputAdornment,
  styled,
  TextField,
  Typography
} from '@mui/material'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

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
  disableCreateOption?: true
  'data-testid'?: string
  disabled?: boolean
  customSetInput?: React.Dispatch<React.SetStateAction<string>>
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
  disableCreateOption,
  'data-testid': dataTestId,
  disabled,
  customSetInput
}: SelectProps): JSX.Element => {
  const [input, setInput] = useState<string>('')

  /**
   * @description On Change on the local input it sets the value to the custom input
   */
  useEffect(() => {
    if (customSetInput !== undefined) {
      customSetInput(input)
    }
  }, [input])

  return (
    <StyledAutocomplete
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
      filterOptions={(options: any, params: any) => {
        const isDisabled = disableCreateOption && disableCreateOption === true
        const filtered = filter(options, params)
        const { inputValue } = params
        const isExisting = options.some((option: any) => inputValue === option.name)
        if (inputValue !== '' && !isExisting && !isDisabled)
          filtered.push({ id: 0, name: `${inputValue}` })
        return filtered
      }}
      isOptionEqualToValue={(option: any, value: any) =>
        option?.name?.toLowerCase() === value?.name?.toLowerCase()
      }
    />
  )
}

/**
 * @description Creates a filter for the autocomplete
 */
const filter = createFilterOptions()

/**
 * @description Styled autocomplete
 * @param {JSX.Element} Autocomplete - The autocomplete component
 */
const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  '& .Mui-error': {
    color: theme.palette.error.main + ' !important'
  },
  '& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)': {
    // Default transform is "translate(14px, 20px) scale(1)""
    // This lines up the label with the initial cursor position in the input
    // after changing its padding-left.
    transform: 'translate(34px, 20px) scale(1);'
  },
  '&.Mui-focused .MuiInputLabel-outlined': {
    color: '#fff'
  },
  '& .MuiFormHelperText-root': {
    color: '#d0d0d0'
  },
  '& .MuiAutocomplete-inputRoot': {
    backgroundColor: '#405463',
    color: '#fff',
    // This matches the specificity of the default styles at https://github.com/mui-org/material-ui/blob/v4.11.3/packages/material-ui-lab/src/Autocomplete/Autocomplete.js#L90
    '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-of-type': {
      // Default left padding is 6px
      paddingLeft: 0
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#808080'
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#fff'
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main,
      color: '#fff'
    },
    '& .MuiSvgIcon-root': {
      color: '#808080'
    },
    '&.Mui-focused .MuiInputAdornment-root .MuiSvgIcon-root': {
      color: '#fff'
    },
    '&.Mui-focused .MuiAutocomplete-endAdornment .MuiSvgIcon-root': {
      color: '#fff'
    },
    '&Mui-focused': {
      color: '#fff'
    }
  }
}))

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
  disableCreateOption: PropTypes.bool,
  'data-testid': PropTypes.string,
  disabled: PropTypes.bool,
  customSetInput: PropTypes.func
}
