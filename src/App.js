import { Box, Grid } from '@mui/material';
import Dibuat from './components/dibuat';
import Foto from './components/foto';
import Keahlian from './components/keahlian';
import Kontak from './components/kontak';
import Pekerjaan from './components/pekerjaan';
import Pendidikan from './components/pendidikan';
import Profil from './components/profil';
import Sertifikat from './components/sertifikat';

const App = () => {
	return (
		<Box sx={{ flexGrow: 1, p: 3 }}>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={4}>
					<Foto />
					<Kontak />
					<Keahlian />
					<Dibuat />
				</Grid>
				<Grid item xs={12} sm={8}>
					<Profil />
					<Pekerjaan />
					<Pendidikan />
					<Sertifikat />
				</Grid>
			</Grid>
		</Box>
	);
};

export default App;
