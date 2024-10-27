import GeneralCardWithLinear from '~/components/CardsList/GeneralCardWithLinear.tsx'
import { HelpRequestCardType } from '~/pages/onerequers'

const HelpRequestCard = ({
	title,
	goal,
	completionDate,
	collected,
	collectedGoal,
	contributorsCount
}: HelpRequestCardType) => {
	return (
		<GeneralCardWithLinear
			title={title}
			goal={goal}
			completionDate={completionDate}
			collected={collected}
			collectedGoal={collectedGoal}
			contributorsCount={contributorsCount}
		/>
	)
}

export default HelpRequestCard
