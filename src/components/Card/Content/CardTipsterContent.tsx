import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import {
  CardActions,
  CardContent,
  Collapse,
  IconButton,
  IconButtonProps,
  styled,
  Typography
} from '@mui/material'
import React, { useState } from 'react'

import TipsterStatistics from '@/components/TipsterStatistics/TipsterStatistic'

/**
 * @description ExpandMoreProps interface
 */
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean
}

/**
 * @description ExpandMore component
 * @param {ExpandMoreProps} props - ExpandMoreProps
 * @returns {JSX.Element} ExpandMore component
 */
const ExpandMore = styled((props: ExpandMoreProps) => {
  // eslint-disable-next-line
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}))

/**
 * @description CardTipsterContent props
 */
export type CardTipsterContentProps = unknown

/**
 * @description CardTipsterContent component
 * @param {CardTipsterContentProps} props - CardTipsterContentProps
 * @returns {JSX.Element} CardTipsterContent component
 */

export const CardTipsterContent = (): JSX.Element => {
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <React.Fragment>
      <CardContent data-testid="card-tipster-content">
        <TipsterStatistics />
      </CardContent>
      <CardActions disableSpacing data-testid="card-tipster-content-actions">
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          data-testid="card-tipster-content-collapse-button"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside
            for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large
            plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay
            leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often
            until thickened and fragrant, about 10 minutes. Add saffron broth and
            remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers,
            and cook without stirring, until most of the liquid is absorbed, 15 to 18
            minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking
            them down into the rice, and cook again without stirring, until mussels have
            opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that
            don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </React.Fragment>
  )
}

export default CardTipsterContent
