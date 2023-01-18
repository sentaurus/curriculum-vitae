import { Engineering } from '@mui/icons-material';
import { Card, CardContent, Chip, Divider, Grid, LinearProgress, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react';

const Item = ({ text, value }) => (
	<Grid container alignItems='center' spacing={1} sx={{ mb: 1 }}>
		<Grid item xs={4}>
			<Chip label={text} color='error' size='small' />
		</Grid>
		<Grid item xs>
			<LinearProgress variant='determinate' value={value} sx={{ height: 10, borderRadius: 10 }} />
		</Grid>
	</Grid>
);

const Keahlian = () => (
	<Card sx={{ mb: 3, borderRadius: 5 }}>
		<CardContent>
			<Grid container alignItems='center'>
				<Engineering fontSize='large' sx={{ mr: 1, color: red[500] }} />
				<Typography fontSize={25} fontWeight={500}>
					SKILLS
				</Typography>
			</Grid>
			<Divider sx={{ my: 1, bgcolor: red[500] }} />
			<Item text='Administration' value={70} />
			<Item text='Flutter' value={65} />
			<Item text='JavaScript' value={85} />
			<Item text='MySQL' value={75} />
			<Item text='Vue.js' value={78} />
			<Item text='React.js' value={90} />
			<Item text='React Native' value={83} />
			<Item text='Express.js' value={80} />
			<Item text='Node.js' value={84} />
			<Item text='MongoDB' value={79} />
		</CardContent>
	</Card>
);

export default Keahlian;
