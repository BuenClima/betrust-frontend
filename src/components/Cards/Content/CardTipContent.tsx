import { CardContent, Chip, Grid, Stack, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import { useMemo } from 'react'
/**
 * @description CardTipContent props
 * @property {boolean} extended - extended
 * @property {() => void} handleTipClick - handleTipClick
 */
export type CardTipContentProps = {
  extended: boolean
  handleTipClick?: () => void
}

/**
 * @description CardTipContent component
 * @param {CardTipContentProps} props - CardTipContentProps
 * @returns {JSX.Element} CardTipContent component
 */
export const CardTipContent = (props: CardTipContentProps) => {
  const { extended, handleTipClick } = props

  const handleOnClick = () => {
    handleTipClick && handleTipClick()
  }

  const extendedCardContent = useMemo(
    () => (
      <Stack direction="row" spacing={2}>
        <Chip
          label="Bet365"
          color="success"
          component="a"
          href="#basic-chip"
          clickable
          variant="outlined"
        />
        <Chip label="Odds 1" color="warning" variant="outlined" />
        <Chip label="SKT 1" color="primary" variant="outlined" />
        <Chip label="Result" color="primary" variant="outlined" />
      </Stack>
    ),
    [extended]
  )
  return (
    <CardContent onClick={handleOnClick}>
      <Grid container justifyContent="center" alignItems="center" spacing={1}>
        <Grid item xs={12} container justifyContent="center" alignItems="center">
          <Typography variant={'h6'}>Real Madrid vs Barcelona</Typography>
        </Grid>
        <Grid item xs={12} container justifyContent="center" alignItems="center">
          <Typography variant={'subtitle1'}>Real Madrid to win</Typography>
        </Grid>
        <Grid item xs={12} container justifyContent="center" alignItems="center">
          {extended && extendedCardContent}
        </Grid>
      </Grid>
    </CardContent>
  )
}

export default CardTipContent

/**
 * @description CardTipContent component props default values
 * @property {boolean} extended - extended
 * @property {() => void} handleTipClick - handleTipClick
 */
CardTipContent.propTypes = {
  extended: PropTypes.bool.isRequired,
  handleTipClick: PropTypes.func
}
