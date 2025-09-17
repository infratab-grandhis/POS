import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import OuterLayout from '../Layouts/OuterLayout.jsx';

const Home = () => {
    return (
        <OuterLayout>
            <Box m={5} textAlign='center'>
                <Typography mb={2}>Welcome To the Food-Truck-POS</Typography>
                <Button variant='contained'>Start Here</Button>
            </Box>
        </OuterLayout>
    );
}

export default Home;