import { Box, Card, CardContent, Chip, Grid, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react';
import Lottie from 'lottie-react';
import avatar from '../assets/avatar.json';

const Foto = () => (
	<Box>
		<Card sx={{ mb: 4, borderRadius: 5 }}>
			<CardContent>
				<Typography fontSize={35} fontWeight={900} color={red[500]}>
					Curriculum Vitae
				</Typography>
			</CardContent>
		</Card>
		<Card sx={{ mb: 4, borderRadius: 5 }}>
			<CardContent>
				<Lottie animationData={avatar} loop={true} />
			</CardContent>
		</Card>
		<Card sx={{ mb: 4, borderRadius: 5 }}>
			<CardContent>
				<Grid container alignItems='center'>
					<Typography fontSize={35} fontWeight={500} color={red[500]}>
						Dika
					</Typography>
					<Typography fontSize={35} fontWeight={900} sx={{ ml: 1 }}>
						Pramudia
					</Typography>
				</Grid>
				<Chip label='Fullstack Developer' color='error' sx={{ mr: 1, mb: 1 }} />
				<Chip label='Mobile Developer' color='error' sx={{ mr: 1, mb: 1 }} />
			</CardContent>
		</Card>
	</Box>
);

export default Foto;
