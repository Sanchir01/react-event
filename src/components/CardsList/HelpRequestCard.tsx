import GeneralCardWithLinear from "~/components/CardsList/GeneralCardWithLinear.tsx";

const HelpRequestCard = ({title, goal, completionDate, collected, collectedGoal}) => {
    return <GeneralCardWithLinear
        title={title}
        goal={goal}
        completionDate={completionDate}
        collected={collected}
        collectedGoal={collectedGoal}
    />
}

export default HelpRequestCard;