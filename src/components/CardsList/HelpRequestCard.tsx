import GeneralCardWithLinear from "~/components/CardsList/GeneralCardWithLinear.tsx";

const HelpRequestCard = ({title, goal, completionDate, collected}) => {
    return <GeneralCardWithLinear
        title={title}
        goal={goal}
        completionDate={completionDate}
        collected={collected}
    />
}

export default HelpRequestCard;