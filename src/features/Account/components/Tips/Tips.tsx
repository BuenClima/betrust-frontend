import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'

import FilteredList from '@/components/FilteredList/FilteredList'

/**
 * @description Tips component
 * @returns {JSX.Element} Tips component
 */
export const Tips = (): JSX.Element => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>History (100)</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FilteredList type="tips" filter="filterTips" />
      </AccordionDetails>
    </Accordion>
  )
}

export default Tips
