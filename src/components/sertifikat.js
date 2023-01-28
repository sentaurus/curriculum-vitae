import { Link, Verified } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react';
import data from './data.json';

const Item = ({ item }) => (
	<Box sx={{ mb: 2 }}>
		<Typography fontSize={20}>{item.author}</Typography>
		<Typography fontSize={23} fontWeight={900}>
			{item.title}
		</Typography>
		<Grid container alignItems='center'>
			<Button onClick={() => window.open(item.link)} startIcon={<Link />} color='warning' size='small'>
				Display Credentials
			</Button>
			<Typography color={red[500]}>{item.terbit}</Typography>
		</Grid>
	</Box>
);

const Sertifikat = () => (
	<Card sx={{ borderRadius: 5 }}>
		<CardContent>
			<Grid container alignItems='center'>
				<Verified fontSize='large' sx={{ mr: 1, color: red[500] }} />
				<Typography fontSize={25} fontWeight={500}>
					CERTIFICATE
				</Typography>
			</Grid>
			<Divider sx={{ my: 1, bgcolor: red[500] }} />
			{data.sertifikat.map((item, index) => (
				<Item key={index} item={item} />
			))}
		</CardContent>
	</Card>
);

export default Sertifikat;
