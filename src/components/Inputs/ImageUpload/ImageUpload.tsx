import { IconButton, Input, InputLabel, Tooltip } from '@mui/material'
import PropTypes from 'prop-types'

/**
 * @description ImageUpload props
 * @property {string} tooltip - Tooltip
 * @property {React.ReactNode} children - Children
 * @property {boolean} self - Self
 */
type ImageUploadProps = {
  tooltip?: string
  children: React.ReactNode
  self?: boolean
  htmlFor: string
}

/**
 * @description ImageUpload component
 * @param {ImageUploadProps} { tooltip, component, self } - ImageUploadProps
 * @returns {JSX.Element} ImageUpload component
 */
export const ImageUpload = (props: ImageUploadProps): JSX.Element => {
  const { tooltip, children, self, htmlFor } = props
  return (
    <InputLabel htmlFor={`${htmlFor}-button-file`}>
      <Input
        style={{ display: 'none' }}
        id={`${htmlFor}-button-file`}
        name={`${htmlFor}-button-file`}
        type="file"
        inputProps={{ accept: 'image/*' }}
        onChange={(e) => {
          console.log(e.target)
        }}
        disabled={!self}
      />
      <Tooltip title={tooltip}>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
          disabled={!self}
        >
          {children}
        </IconButton>
      </Tooltip>
    </InputLabel>
  )
}

export default ImageUpload

/**
 * @description ImageUpload prop types
 * @property {string} tooltip - Tooltip
 * @property {React.ReactNode} children - Children
 * @property {boolean} self - Self
 */
ImageUpload.propTypes = {
  tooltip: PropTypes.string,
  children: PropTypes.node.isRequired,
  self: PropTypes.bool
}
