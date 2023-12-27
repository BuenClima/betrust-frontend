import { Grid, IconButton, Typography } from '@mui/material'
import PropTypes from 'prop-types'

/**
 * @description CardTipTitle props
 * @property {string} title - title
 * @property {string} tipster - tipster
 * @property {() => void} handleTipsterCallback - handleTipsterCallback
 */
export type CardTipTitleProps = {
  title?: string
  tipster?: string
  handleTipsterCallback?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
}

/**
 * @description CardTipTitle component
 * @param {CardTipTitleProps} props - CardTipTitleProps
 * @returns {JSX.Element} CardTipTitle component
 */
export const CardTipTitle = (props: CardTipTitleProps): JSX.Element => {
  const { title, tipster, handleTipsterCallback } = props
  const handleTipsterClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    handleTipsterCallback && handleTipsterCallback(e)
  }
  return (
    <Grid container gap={1} alignItems="center">
      <Typography variant="h6">{title}</Typography>

      <IconButton onClick={handleTipsterClick} sx={{ borderRadius: 0.3 }}>
        <Typography>{tipster}</Typography>
      </IconButton>
    </Grid>
  )
}

export default CardTipTitle

/**
 * @description CardTipTitle component props default values
 * @property {string} title - title
 * @property {string} tipster - tipster
 * @property {() => void} handleTipsterCallback - handleTipsterCallback
 */
CardTipTitle.propTypes = {
  title: PropTypes.string,
  tipster: PropTypes.string,
  handleTipsterCallback: PropTypes.func
}
