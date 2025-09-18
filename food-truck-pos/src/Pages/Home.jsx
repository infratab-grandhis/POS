import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

import OuterLayout from '../Layouts/OuterLayout.jsx';
import pages from './Constants.js';

const Home = () => {
    const navigate = useNavigate();
    
    const navigateToProductsPage = () => {
        navigate(pages?.products);
    }

    return (
        <OuterLayout>
            <Box m={5} textAlign='center'>
                <Typography mb={2}>Welcome To the Food-Truck-POS</Typography>
                <Button variant='contained' onClick={navigateToProductsPage}>Start Here</Button>
            </Box>
        </OuterLayout>
    );
}

export default Home;