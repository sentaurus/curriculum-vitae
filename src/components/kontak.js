import { Call, ContactMail, Email, Facebook, GitHub, LinkedIn, Place, WhatsApp } from '@mui/icons-material';
import { Card, CardContent, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { blue, cyan, green, grey, orange, red } from '@mui/material/colors';
import React from 'react';

const Item = ({ icon, primary, secondary }) => (
	<ListItem disablePadding>
		<ListItemIcon>{icon}</ListItemIcon>
		<ListItemText primary={primary} secondary={secondary} />
	</ListItem>
);

const Kontak = () => (
	<Card sx={{ mb: 4, borderRadius: 5 }}>
		<CardContent>
			<Grid container alignItems='center'>
				<ContactMail fontSize='large' sx={{ mr: 1, color: red[500] }} />
				<Typography fontSize={25} fontWeight={500}>
					CONTACTS
				</Typography>
			</Grid>
			<Divider sx={{ my: 1, bgcolor: red[500] }} />
			<List dense disablePadding>
				<Item icon={<Call sx={{ color: orange[500] }} />} primary='+62 812 3456 7890' secondary='Phone' />
				<Item icon={<Place sx={{ color: red[500] }} />} primary='Madiun, East Java, Indonesia' secondary='Address' />
				<Item icon={<Email sx={{ color: grey[500] }} />} primary='dikapramudia@outlook.co.id' secondary='Email' />
				<Item icon={<WhatsApp sx={{ color: green[500] }} />} primary='+62 812 3456 7890' secondary='WhatsApp' />
				<Item icon={<GitHub sx={{ color: 'white' }} />} primary='github.com/sentaurus' secondary='GitHub' />
				<Item icon={<LinkedIn sx={{ color: blue[500] }} />} primary='linkedin.com/in/dika-pramudia' secondary='LinkedIn' />
				<Item icon={<Facebook sx={{ color: cyan[500] }} />} primary='facebook.com/dika.sentaurus' secondary='facebook' />
			</List>
		</CardContent>
	</Card>
);

export default Kontak;
