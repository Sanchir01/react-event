import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Grid2,
    LinearProgress,
    Typography
} from "@mui/material";

const GeneralCardWithLinear = ({title, additionalContent, goal, completionDate, collected, collectedGoal}) => {
    return <Card sx={{ maxWidth: 320, borderRadius: 2, boxShadow: 3 , height: '100%'}}>
        <CardContent sx={{paddingBottom: 0}}>
            {title}
            {additionalContent}
            <Typography variant='body2' color='textSecondary' gutterBottom>
                <strong>Цель сбора:</strong> {goal}
            </Typography>
            <Typography variant='body2' color='textSecondary' gutterBottom>
                <strong>Завершение:</strong> {completionDate}
            </Typography>
            <Typography variant='body2' color='textSecondary'>
                <strong>Мы собрали:</strong>
            </Typography>
            <LinearProgress
                variant='determinate'
                value={60}
                sx={{ mt: 1, mb: 0 }}
            />
            <Grid2 container>
                <Grid2 item size={6}>
                    <Typography color='textSecondary' fontSize={'14px'}>{collected}</Typography>
                </Grid2>
                <Grid2 item size={6} display={'flex'} justifyContent={'end'}>
                    <Typography color='textSecondary' fontSize={'14px'}>{collectedGoal}</Typography>
                </Grid2>
            </Grid2>

            <Typography variant='body2' color='textSecondary' sx={{marginTop: '15px'}}>
                Нас уже: 3 566 987
            </Typography>
        </CardContent>
        <CardActions>
            <Button fullWidth variant='contained' color='primary'>
                Помочь
            </Button>
        </CardActions>
    </Card>
}

export default GeneralCardWithLinear;