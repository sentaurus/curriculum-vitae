import { Card, CardContent, Chip, Divider, Grid, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react';
import Lottie from 'lottie-react';
import avatar from '../assets/avatar.json';

const Foto = () => (
	<Card sx={{ mb: 4, borderRadius: 5 }}>
		<CardContent>
			<Grid container alignItems='center' spacing={2}>
				<Grid item xs={12} sm={6}>
					<Lottie animationData={avatar} loop={true} />
				</Grid>
				<Grid item xs={12} sm={6}>
					<Grid container alignItems='center'>
						<Grid item sm={12} sx={{ mr: 1 }}>
							<Typography fontSize={30} fontWeight={500} color={red[500]}>
								Dika
							</Typography>
						</Grid>
						<Grid item sm={12}>
							<Typography fontSize={35} fontWeight={900}>
								Pramudia
							</Typography>
						</Grid>
					</Grid>
					<Divider sx={{ mb: 1, bgcolor: red[500] }} />
					<Chip label='Fullstack Developer' color='error' sx={{ mr: 1, mb: 1 }} size='small' />
					<Chip label='Mobile Developer' color='error' sx={{ mr: 1, mb: 1 }} size='small' />
				</Grid>
			</Grid>
		</CardContent>
	</Card>
);

export default Foto;
