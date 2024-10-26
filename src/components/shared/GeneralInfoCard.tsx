import {Card, CardContent, CardMedia, Typography} from "@mui/material";

const GeneralInfoCard = ({imgUrl, text, dimensions}) => {
    return <Card fullWidth sx={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <CardContent>
            <CardMedia
                sx={{width: dimensions.width, height: dimensions.height}}
                image={imgUrl}
            />
            <Typography className={'error__text'} variant="h5" component="div" textAlign={'center'}>
                {text}
            </Typography>
        </CardContent>
    </Card>
}

export default GeneralInfoCard;