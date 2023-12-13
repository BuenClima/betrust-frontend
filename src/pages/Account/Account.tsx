import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Tab,
  Tabs,
  Typography
} from '@mui/material'
import { useState } from 'react'

import { FilteredList } from '@/components/FilteredList/FilteredList'
import { Header } from '@/components/Header/Header'
import { AccountForm } from '@/forms/Account/AccountForm'
import { Layout } from '@/layouts/Layout'

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

export const Account = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <Layout>
      <Header type="account" />
      <Container maxWidth={'xl'}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Profile" {...a11yProps(0)} />
          <Tab label="Tips" {...a11yProps(1)} />
          <Tab label="Payments" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <AccountForm />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>History</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FilteredList type="bets" filter="filterBets" />
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
    </Layout>
  )
}

export default Account
