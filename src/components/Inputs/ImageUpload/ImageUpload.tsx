import { IconButton, Input, InputLabel, SxProps, Tooltip } from '@mui/material'
import PropTypes from 'prop-types'

/**
 * @description ImageUpload props
 * @property {string} tooltip - Tooltip
 * @property {React.ReactNode} children - Children
 * @property {boolean} self - Self
 * @property {SxProps} iconButtonSx - IconButton SxProps
 */
type ImageUploadProps = {
  tooltip?: string
  children: React.ReactNode
  self?: boolean
  iconButtonSx?: SxProps
}

/**
 * @description ImageUpload component
 * @param {ImageUploadProps} { tooltip, component, self } - ImageUploadProps
 * @returns {JSX.Element} ImageUpload component
 */
export const ImageUpload = ({
  tooltip,
  children,
  iconButtonSx,
  self
}: ImageUploadProps): JSX.Element => {
  return (
    <InputLabel htmlFor="avatar-button-file">
      <Input
        style={{ display: 'none' }}
        id="avatar-button-file"
        name="avatar-button-file"
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
          sx={iconButtonSx}
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
 * @property {SxProps} iconButtonSx - IconButton SxProps
 */
ImageUpload.propTypes = {
  tooltip: PropTypes.string,
  children: PropTypes.node.isRequired,
  self: PropTypes.bool,
  iconButtonSx: PropTypes.object
}
