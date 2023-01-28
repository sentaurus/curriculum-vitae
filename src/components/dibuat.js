import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react';

const Dibuat = () => (
	<Card sx={{ borderRadius: 5, bgcolor: red[500] }} elevation={5}>
		<CardContent>
			<Grid container alignItems='center'>
				<Typography>Copyright &copy; 2023, Dika Pramudia</Typography>
				<Card sx={{ bgcolor: 'transparent', ml: 1 }} elevation={0}>
					<CardMedia component='img' src={require('../assets/mui.webp')} sx={{ height: 20 }} />
				</Card>
				<Card sx={{ bgcolor: 'transparent', ml: 1 }} elevation={0}>
					<CardMedia component='img' src={require('../assets/netlify.webp')} sx={{ height: 20 }} />
				</Card>
			</Grid>
			<Grid container alignItems='center'></Grid>
		</CardContent>
	</Card>
);

export default Dibuat;
