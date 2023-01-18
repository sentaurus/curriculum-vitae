import { Person } from '@mui/icons-material';
import { Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react';

const Profil = () => (
	<Card sx={{ mb: 4, borderRadius: 5 }}>
		<CardContent>
			<Grid container alignItems='center'>
				<Person fontSize='large' sx={{ mr: 1, color: red[500] }} />
				<Typography fontSize={25} fontWeight={500}>
					PROFILE
				</Typography>
			</Grid>
			<Divider sx={{ my: 1, bgcolor: red[500] }} />
			<Typography>
				I am Fullstack and Mobile Developer with more than 2 years working experience, I understand web development technology from both Frontend and Backend with javascript programming language and implementing Rest API for payment purposes, notifications and
				real-time updated information
			</Typography>
		</CardContent>
	</Card>
);

export default Profil;
