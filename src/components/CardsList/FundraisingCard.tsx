import {Avatar, Box, Divider, Typography,} from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import DementiaImage from '~/shared/assets/Dementia.png'
import GeneralCardWithLinear from "~/components/CardsList/GeneralCardWithLinear.tsx";
import React, {Fragment} from "react";

interface FundraisingCardProps {
    title: string
    organizer: string
    location: string
    goal: string
    completionDate: string
    collected: string
}

const renderAdditionalContent = (title, organizer, location) => {
    return <Fragment><Box display='flex' justifyContent='center' mb={2}>
        <Avatar
            alt='Dementia'
            src={DementiaImage}
            sx={{width: 220, height: 220}}
        />
    </Box>
        <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            mb={2}
        >
            {' '}
            <Typography variant='h6' gutterBottom>
                {title}
            </Typography>
            <FavoriteBorderIcon color='action'/>
        </Box>
        <Divider sx={{ my: 2 }} />

        <Typography variant='body2' color='textSecondary' gutterBottom>
            <strong>Организатор:</strong> {organizer}
        </Typography>
        <Typography variant='body2' color='textSecondary'>
            <strong>Локация:</strong> {location}
        </Typography></Fragment>
}

const FundraisingCard: React.FC<FundraisingCardProps> = ({
                                                             title,
                                                             organizer,
                                                             location,
                                                             goal,
                                                             completionDate,
                                                             collected,
                                                             collectedGoal
                                                         }) => {
    return (
        <GeneralCardWithLinear
            additionalContent={renderAdditionalContent(title, organizer, location)}
            goal={goal}
            completionDate={completionDate}
            collected={collected}
            collectedGoal={collectedGoal}
        />
    )
}

export default FundraisingCard
