import React, { useState } from 'react';
import { Button, Typography, Tabs, Tab, IconButton } from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PlaceIcon from '@mui/icons-material/Place';
import './ProfileSection.css';
import Map from './Map';

const ProfileSection: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedIconTab, setSelectedIconTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => setSelectedTab(newValue);
  const handleIconTabChange = (index: number) => setSelectedIconTab(index);

  return (
    <div className="profileContainer">
      <Typography variant="h4" className="profileTitle">Мой профиль</Typography>
      <div className="profileSection">
        <ProfileSidebar />
        
        <div className="profileContent">
          <Tabs value={selectedTab} onChange={handleTabChange} className="profileTabs">
            <Tab label="Личные данные" />
            <Tab label="Контакты" />
            <Tab label="Избранное" />
          </Tabs>

          <div className="tabContent">
            {selectedTab === 0 && <PersonalData />}
            {selectedTab === 1 && <ContactInfo />}
            {selectedTab === 2 && <FavoritesTab selectedIconTab={selectedIconTab} onIconTabChange={handleIconTabChange} />}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileSidebar: React.FC = () => (
  <div className="profileSidebar">
    <img src="/src/shared/assets/images/PersonRounded.svg" className="personRounded" alt="User Avatar" />
    <div className="userInfoBlock">
      <Typography variant="h6" className="userName">Ангелина Фомина</Typography>
      <Typography variant="body2" className="userStatus"><span className="label">Статус:</span> Начинающий</Typography>
    </div>
    <Button variant="outlined" className="logoutButton">Выйти из аккаунта</Button>
  </div>
);

const PersonalData: React.FC = () => (
  <>
    <Section title="Профиль">
      <InfoItem label="Фамилия" value="Фомина" />
      <InfoItem label="Имя" value="Анжелина" />
    </Section>
    <Section title="Дата рождения">
      <Typography variant="body2">13.02.1994</Typography>
    </Section>
    <Section title="Локация для помощи">
      <InfoItem label="Область" value="Владимирская" />
      <InfoItem label="Населенный пункт" value="Владимир" />
      <InfoItem label="Область" value="Нижегородская" />
      <InfoItem label="Населенный пункт" value="Нижний Новгород" />
    </Section>
    <Section title="Образование">
      <InfoItem label="Учреждение" value="МОУ СОШ №7" />
      <InfoItem label="Уровень образования" value="Средний общий" />
      <InfoItem label="Год окончания" value="2010" />
      <InfoItem label="Учреждение" value="Московский государственный университет им. М.В. Ломоносова" />
      <InfoItem label="Уровень образования" value="Высшее" />
      <InfoItem label="Направление" value="Информатика и вычислительная техника" />
      <InfoItem label="Год окончания" value="2023" />
    </Section>
    <Section title="Обо мне">
      <Typography variant="body2" className="aboutMeText">
        Я волонтер, который работает с пенсионерами, и это приносит мне огромную радость...
      </Typography>
    </Section>
  </>
);

const ContactInfo: React.FC = () => (
  <>
    <Section title="E-mail">
      <Typography variant="body2">forexample12@gmail.com</Typography>
    </Section>
    <Section title="Телефон">
      <Typography variant="body2">+7 999 555 66 11</Typography>
    </Section>
    <Section title="Социальные сети">
      <SocialLink href="#" icon="/src/shared/assets/images/vk.svg" label="VKontakte" />
      <SocialLink href="#" icon="/src/shared/assets/images/telegram.svg" label="Telegram" />
      <SocialLink href="#" icon="/src/shared/assets/images/whatsapp.svg" label="WhatsApp" />
    </Section>
  </>
);

const FavoritesTab: React.FC<{ selectedIconTab: number, onIconTabChange: (index: number) => void }> = ({ selectedIconTab, onIconTabChange }) => (
  <>
    <div className="iconTabsContainer">
    <IconButton
    onClick={() => onIconTabChange(0)}
    className={selectedIconTab === 0 ? 'iconTab selected' : 'iconTab'}
    sx={{
      border: selectedIconTab === 0 ? '1px solid' : '1px solid #f5f5f5',
      backgroundColor: selectedIconTab === 0 ? '#e0e0e0' : '#fff',
      borderRadius: '4px 0 0 4px',
      padding: '4px',
      '&:hover': {
          backgroundColor: '#e0e0e0'
      }
  }}
>
    <GridViewIcon />
</IconButton>
<IconButton
    onClick={() => onIconTabChange(1)}
    className={selectedIconTab === 1 ? 'iconTab selected' : 'iconTab'}
    sx={{
      border: selectedIconTab === 1 ? '1px solid' : '1px solid #f5f5f5',
      backgroundColor: selectedIconTab === 1 ? '#e0e0e0' : '#fff',
      borderRadius: '0',
      padding: '4px',
      '&:hover': {
          backgroundColor: '#e0e0e0'
      }
  }}
>
    <ListAltIcon />
</IconButton>
<IconButton
    onClick={() => onIconTabChange(2)}
    className={selectedIconTab === 2 ? 'iconTab selected' : 'iconTab'}
    sx={{
      border: selectedIconTab === 2 ? '1px solid' : '1px solid #f5f5f5',
      backgroundColor: selectedIconTab === 2 ? '#e0e0e0' : '#fff',
      borderRadius: '0 4px 4px 0',
      padding: '4px',
      '&:hover': {
          backgroundColor: '#e0e0e0'
      }
  }}
>
    <PlaceIcon />
</IconButton>
    </div>
    <div className="innerTabContent">
      {selectedIconTab === 0 && <FavoritesObjects />}
      {selectedIconTab === 1 && <FavoritesDocuments />}
      {selectedIconTab === 2 && <FavoritesLocations />}
    </div>
  </>
);

const FavoritesObjects: React.FC = () => (
  <div className="favoritesContent">
   {/* Компонент*/}
  </div>
);

const FavoritesDocuments: React.FC = () => (
  <div className="favoritesContent">
       {/* Компонент*/}
  </div>
);

const FavoritesLocations: React.FC = () => (
  <div className="favoritesContent">
    <Map />
  </div>
);

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="infoBlock">
    <Typography variant="h6" className="sectionTitle">{title}</Typography>
    {children}
  </div>
);

const InfoItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <Typography variant="body2"><span className="label">{label}:</span> {value}</Typography>
);

const SocialLink: React.FC<{ href: string; icon: string; label: string }> = ({ href, icon, label }) => (
  <a href={href} className="socialLink">
    <img src={icon} alt={label} className="socialIcon" />
    <span>{label}</span>
  </a>
);

export default ProfileSection;