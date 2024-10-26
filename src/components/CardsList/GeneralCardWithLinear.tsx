import {Avatar, Box, Button, Card, CardActions, CardContent, Divider, LinearProgress, Typography} from "@mui/material";

const GeneralCardWithLinear = ({title, additionalContent, goal, completionDate, collected}) => {
    return <Card sx={{ maxWidth: 320, borderRadius: 2, boxShadow: 3 }}>
        <CardContent>
            {title}
            {additionalContent}
            <Typography variant='body2' color='textSecondary' gutterBottom>
                <strong>Цель сбора:</strong> {goal}
            </Typography>
            <Typography variant='body2' color='textSecondary' gutterBottom>
                <strong>Завершение:</strong> {completionDate}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant='body2' color='textSecondary'>
                <strong>Мы собрали:</strong> {collected}
            </Typography>
            <LinearProgress
                variant='determinate'
                value={60}
                sx={{ mt: 1, mb: 2 }}
            />
            <Typography variant='body2' color='textSecondary'>
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