import './ErrorGetCard.css';
import errorImg from '~/shared/assets/images/error.jpg'
import GeneralInfoCard from "~/components/shared/GeneralInfoCard.tsx";

const ErrorGetCard = () => {
    return <GeneralInfoCard
        imgUrl={errorImg}
        text={'Ошибка! Не удалось загрузить информацию'}
        dimensions={{'width': 419, 'height': 240}}
    />
}
export default ErrorGetCard;