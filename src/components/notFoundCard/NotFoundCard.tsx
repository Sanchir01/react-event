import {Card, CardMedia, Typography,CardContent} from "@mui/material";
import './notFoundCard.css';
import GeneralInfoCard from "~/components/shared/GeneralInfoCard.tsx";
import notFoundImg from "~/shared/assets/images/notfound.jpg";

const NotFoundGetCard = () => {
    return <GeneralInfoCard
        imgUrl={notFoundImg}
        text={'Запросы не найдены'}
        dimensions={{'width': 262, 'height': 272}}
        color={'black'}
    />
}

export default NotFoundGetCard;