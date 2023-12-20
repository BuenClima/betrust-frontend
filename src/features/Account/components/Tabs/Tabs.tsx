import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Grid,
  Tab,
  Tabs as TabsMui,
  Typography
} from '@mui/material'
import { useState } from 'react'

import FilteredList from '@/components/FilteredList/FilteredList'
import { TabPanel } from '@/features/Account/components/TabPanel/TabPanel'
import { ProfileForm } from '@/features/Account/forms/ProfileForm'

type a11y = { id: string; 'aria-controls': string }

/**
 * @description a11yProps function
 * @param {number} index - index
 * @returns {JSX.Element} a11yProps function
 */
const a11yProps = (index: number): a11y => {
  return {
    id: `tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

/**
 * @description Tabs component
 * @returns {JSX.Element} Tabs component
 */
export const Tabs = (): JSX.Element => {
  const [value, setValue] = useState(0)

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <Container maxWidth={'xl'}>
      <TabsMui value={value} onChange={handleChange}>
        <Tab label="Profile" {...a11yProps(0)} />
        <Tab label="Tips" {...a11yProps(1)} />
        <Tab label="Payments" {...a11yProps(2)} />
      </TabsMui>
      <TabPanel value={value} index={0}>
        <ProfileForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>History (100)</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FilteredList type="tips" filter="filterTips" />
          </AccordionDetails>
        </Accordion>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container>
          <Grid item xs={12}>
            Item Three
          </Grid>
        </Grid>
      </TabPanel>
    </Container>
  )
}

export default Tabs
