// Importa los componentes necesarios de Material-UI
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Material-UI Demo
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <div style={{ padding: '20px' }}>
        <Button variant="contained" color="primary">
          Mi botón
        </Button>
      </div>
    </div>
  );
}

export default App;

