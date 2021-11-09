import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM -09.00 Am',
        space: 10
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '08.00 AM -09.00 Am',
        space: 8
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM -11.00 Am',
        space: 9
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM -12.00 Pm',
        space: 5
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM -07.00 Pm',
        space: 10
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM -08.00 Pm',
        space: 10
    },
]



const AvailableAppointment = ({ date }) => {
    return (
        <Container>
            <Typography gutterBottom component="div" sx={{ color: 'info.main', mb: 4 }} variant="h4">Available Appointments on {date.toDateString()}</Typography>
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                    ></Booking>)
                }

            </Grid>
        </Container>
    );
};

export default AvailableAppointment;