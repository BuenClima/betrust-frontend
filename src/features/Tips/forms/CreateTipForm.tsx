import Tabs from '@/components/Tabs/Tabs'

import Layout from '../Layouts/Layout'
import { BetForm } from './BetForm'
import { PricingForm } from './PricingForm'
import { ProviderForm } from './ProviderForm'
import { PublishingForm } from './PublisingForm'

/**
 * @description CreateTipForm component
 * @returns {JSX.Element} CreateTipForm component
 */
export const CreateTipForm = (): JSX.Element => {
  return (
    <Layout>
      <Tabs
        tabs={[
          { label: 'Bet', component: <BetForm /> },
          { label: 'Provider', component: <ProviderForm /> },
          { label: 'Publishing', component: <PublishingForm /> },
          { label: 'Pricing', component: <PricingForm /> }
        ]}
      />
    </Layout>
  )
}

export default CreateTipForm
