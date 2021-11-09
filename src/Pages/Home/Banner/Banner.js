import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';


const bannerBackground = {
    background: `url(${bg})`,

}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 450
}

const Banner = () => {
    return (
        <Container style={{ bannerBackground }} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>

                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts here
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 13, color: 'gray', fontWeight: 200 }}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo debitis corrupti ullam et accusamus ab rem sed quam, quas voluptatem!
                        </Typography>
                        <Button style={{ backgroundColor: '#5CE7ED' }} variant="contained">Get-Appointment</Button>
                    </Box>
                </Grid>

                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '70%' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;