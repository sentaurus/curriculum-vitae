import { Work } from '@mui/icons-material';
import { Box, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react';
import data from './data.json';

const Item = ({ item }) => (
	<Box sx={{ mb: 2 }}>
		<Typography fontSize={20}>{item.tahun}</Typography>
		<Typography fontSize={23} fontWeight={900}>
			{item.posisi}
		</Typography>
		<Typography fontSize={20}>{item.perusahaan}</Typography>
		<Typography fontSize={15}>{item.lokasi}</Typography>
		<Typography sx={{ mt: 2 }}>{item.deskripsi}</Typography>
	</Box>
);

const Pekerjaan = () => (
	<Card sx={{ mb: 4, borderRadius: 5 }}>
		<CardContent>
			<Grid container alignItems='center'>
				<Work fontSize='large' sx={{ mr: 1, color: red[500] }} />
				<Typography fontSize={25} fontWeight={500}>
					WORK EXPERIENCE
				</Typography>
			</Grid>
			<Divider sx={{ my: 1, bgcolor: red[500] }} />
			{data.pekerjaan.map((item, index) => (
				<Item key={index} item={item} />
			))}
		</CardContent>
	</Card>
);

export default Pekerjaan;
