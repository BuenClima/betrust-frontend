import Tabs from '@/components/Tabs/Tabs'

import { BetForm } from './BetForm'

/**
 * @description CreateTipForm component
 * @returns {JSX.Element} CreateTipForm component
 */
export const CreateTipForm = (): JSX.Element => {
  return (
    <Tabs
      tabs={[
        { label: 'Bet', component: <BetForm /> },
        { label: 'Publishing', component: <></> },
        { label: 'Pricing', component: <></> }
      ]}
    />
  )
}

export default CreateTipForm
