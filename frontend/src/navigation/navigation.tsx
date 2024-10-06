import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, SvgIcon, Box } from '@mui/material';
import './navigation.css';
import airplaneIcon from './airplane-travelling-around-earth-svgrepo-com.svg';

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false); // Состояние для отслеживания прокрутки

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY; // Получаем текущую позицию прокрутки
            if (scrollPosition > 0) {
                setIsScrolled(true); // Если прокрутка произошла, устанавливаем isScrolled в true
            } else {
                setIsScrolled(false); // В противном случае устанавливаем isScrolled в false
            }
        };

        window.addEventListener('scroll', handleScroll); // Добавляем обработчик события прокрутки

        return () => {
            window.removeEventListener('scroll', handleScroll); // Удаляем обработчик события при размонтировании компонента
        };
    }, []); 

    return (
        <AppBar 
            position = "fixed" 
            className = {isScrolled ? 'scrolled' : 'transparent'} 
            sx = {{ bgcolor: isScrolled ? 'rgba(128, 75, 31, 0.8)' : 'transparent',
                height : 80,
                paddingTop : 1.5,
                paddingLeft : 3,
            }} 
            elevation = {isScrolled ? 4 : 0}>

            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <SvgIcon component="span">
                        <img src={airplaneIcon} alt="Airplane Icon" style={{ width: '120%', height: 'auto' }} />
                    </SvgIcon>
                    <Typography variant="h5" component="div" sx={{ fontFamily: 'Roboto', marginLeft: 2 }}>
                        TBSky
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h5" component="div" sx={{ marginTop: 0.5,  }}>
                        Login
                    </Typography>
                    <Typography variant="h5" component="div" sx={{ marginTop: 0.5, marginLeft: 3 }}>
                        Promotions
                    </Typography>
                    <Typography variant="h5" component="div" sx={{ marginTop: 0.5, marginLeft: 3, marginRight : 2, }}>
                        Contact Us
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
}