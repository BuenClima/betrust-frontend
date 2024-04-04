import { useState } from 'react'

import Tabs from '@/components/Tabs/Tabs'

import { CreateTipFormValues } from '../hooks/useCreateTipForm'
import Layout from '../layouts/Layout'
import { BetForm } from './BetForm'
import { PricingForm } from './PricingForm'
import { ProviderForm } from './ProviderForm'
import { PublishingForm } from './PublisingForm'

/**
 * @description CreateTipForm component
 * @returns {JSX.Element} CreateTipForm component
 */
export const CreateTipForm = (): JSX.Element => {
  const [tip, setTip] = useState<CreateTipFormValues>()
  const [activeTab, setActiveTab] = useState(0)

  const handleTabChange = (index: number, data: CreateTipFormValues) => {
    setActiveTab(index)
    setTip({ ...tip, ...data })
  }

  console.log(activeTab)

  return (
    <Layout>
      <Tabs
        tabs={[
          {
            label: 'Bet',
            component: <BetForm tip={tip} handleTabChange={handleTabChange} />
          },
          { label: 'Provider', component: <ProviderForm tip={tip} setTip={setTip} /> },
          {
            label: 'Publishing',
            component: <PublishingForm tip={tip} setTip={setTip} />
          },
          { label: 'Pricing', component: <PricingForm tip={tip} setTip={setTip} /> }
        ]}
      />
    </Layout>
  )
}

export default CreateTipForm
