import SearchIcon from '@mui/icons-material/Search'
import {
  Autocomplete,
  Box,
  Chip,
  InputAdornment,
  TextField,
  Typography
} from '@mui/material'
import PropTypes from 'prop-types'
import { useState } from 'react'

import { SelectValueProps } from '@/types'

/**
 * Defines the props for the `MultiSelect` component.
 *
 * @param {Array} value - The currently selected values.
 * @param {Function} setValue - A callback function to update the selected values.
 * @param {Array} options - The available options to choose from.
 * @param {string} [placeholder] - The placeholder text for the input field.
 * @param {string} [helperText] - The helper text to display below the input field.
 * @param {boolean} [error] - Indicates if there is an error with the input field.
 * @param {boolean} [disableCreateOption] - Determines if the user can create new options.
 * @param {string} [data-testid] - A data-testid attribute for testing purposes.
 */
export type MultiSelectProps = {
  value: SelectValueProps[]
  setValue: (value: SelectValueProps[]) => void
  options: SelectValueProps[]
  placeholder?: string
  helperText?: string
  error?: boolean
  disableCreateOption?: boolean
  'data-testid'?: string
}
/**
 * Renders a styled autocomplete input field with multiple selection capability.
 *
 * @param {Array} value - The currently selected values.
 * @param {Function} setValue - A callback function to update the selected values.
 * @param {Array} options - The available options to choose from.
 * @param {string} [placeholder] - The placeholder text for the input field.
 * @param {string} [helperText] - The helper text to display below the input field.
 * @param {boolean} [error] - Indicates if there is an error with the input field.
 * @param {boolean} [disableCreateOption] - Determines if the user can create new options.
 * @param {string} [dataTestId] - A data-testid attribute for testing purposes.
 *
 * @returns {JSX.Element} - The rendered MultiSelect component.
 *
 * @description MultiSelect component renders a styled autocomplete input field with multiple selection capability.
 *
 * @example
 * <MultiSelect
 *   value={selectedValues}
 *   setValue={setSelectedValues}
 *   options={selectOptions}
 *   placeholder="Select options"
 *   helperText="Choose multiple options"
 *   error={false}
 *   disableCreateOption={true}
 *   dataTestId="multi-select"
 * />
 */
export const MultiSelect = (props: MultiSelectProps): JSX.Element => {
  const {
    value,
    setValue,
    options,
    placeholder,
    helperText,
    error,
    'data-testid': dataTestId
  } = props
  const [input, setInput] = useState<string>('')

  return (
    <Autocomplete
      data-testid={dataTestId}
      multiple
      value={value}
      getOptionLabel={(option) => (option as SelectValueProps).name}
      onChange={(_event, newValue) => {
        setValue(newValue as SelectValueProps[])
      }}
      sx={{ width: '100%' }}
      inputValue={input}
      onInputChange={(_event, newInputValue) => setInput(newInputValue)}
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
              <>
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
                {params.InputProps.startAdornment}
              </>
            )
          }}
        />
      )}
      renderOption={(props, option: unknown) => (
        <Box component="li" {...props} key={(option as SelectValueProps).id}>
          <Typography textTransform="capitalize">
            {(option as SelectValueProps).name}
          </Typography>
        </Box>
      )}
      isOptionEqualToValue={(option, value) =>
        (option as SelectValueProps)?.name?.toLowerCase() ===
        (value as SelectValueProps)?.name?.toLowerCase()
      }
      renderTags={(value, getTagProps) =>
        value.map((option, index) => {
          return (
            <Chip
              {...getTagProps({ index })}
              key={index}
              variant="outlined"
              label={(option as SelectValueProps)?.name}
            />
          )
        })
      }
    />
  )
}

/**
 * Sets the PropTypes for the `value`, `setValue`, `options`, `placeholder`, `helperText`, `error`, `disableCreateOption` and `dataTestId` prop in the `MultiSelect` component.
 *
 * @param {Array} value - The value object that is passed as a prop to the `MultiSelect` component.
 * @param {Function} setValue - The setValue object that is passed as a prop to the `MultiSelect` component.
 * @param {Array} options - The options object that is passed as a prop to the `MultiSelect` component.
 * @param {String} placeholder - The placeholder object that is passed as a prop to the `MultiSelect` component.
 * @param {String} helperText - The helperText object that is passed as a prop to the `MultiSelect` component.
 * @param {Boolean} error - The error object that is passed as a prop to the `MultiSelect` component.
 * @param {Boolean} disableCreateOption - The disableCreateOption object that is passed as a prop to the `MultiSelect` component.
 * @param {String} data-testid - The data-testid object that is passed as a prop to the `MultiSelect` component.
 * @returns {void} - None. The code snippet is only defining the PropTypes for the `log` prop.
 */
MultiSelect.propTypes = {
  value: PropTypes.array.isRequired,
  setValue: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  disableCreateOption: PropTypes.bool,
  'data-testid': PropTypes.string
}

export default MultiSelect
