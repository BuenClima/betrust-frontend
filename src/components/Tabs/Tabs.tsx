import { Container, Tab, Tabs as TabsMui } from '@mui/material'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

import { a11yProps } from '@/components/A11y/A11y'
import { TabPanel } from '@/components/TabPanel/TabPanel'

/**
 * @description TabType interface
 * @property {string} label - label
 * @property {JSX.Element} component - component
 */
type TabType = {
  label: string
  component: JSX.Element
}

/**
 * @description TabsProps interface
 * @property {TabType[]} tabs - tabs
 */
type TabsProps = {
  tabs: TabType[]
}

/**
 * @description Tabs component
 * @returns {JSX.Element} Tabs component
 */
export const Tabs = (props: TabsProps): JSX.Element => {
  const { tabs } = props
  const [value, setValue] = useState(0)

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  useEffect(() => {
    setValue(0)
  }, [tabs])

  return (
    <Container maxWidth="xl">
      <TabsMui value={value} onChange={handleChange}>
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab.label} {...a11yProps(index)} />
        ))}
      </TabsMui>
      {tabs.map((tab, index) => (
        <TabPanel key={index} value={value} index={index}>
          {tab.component}
        </TabPanel>
      ))}
    </Container>
  )
}

/**
 * @description Tabs propTypes
 * @property {TabType[]} tabs - tabs
 */
Tabs.propTypes = {
  tabs: PropTypes.array.isRequired
}

export default Tabs
