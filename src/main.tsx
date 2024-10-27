import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';


import Providers from '~/app/Providers.tsx';
import CssBaseline from '@mui/material/CssBaseline';
import ProfileSection from './components/ProfileSection/ProfileSection';
import '~/shared/styles/Global.css';


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Providers>
        </Providers>
    </StrictMode>
)
