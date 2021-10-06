import { AppBar, Box, Toolbar, Typography } from '@mui/material';

import Categories from '../components/categories.js';
import Cart from '../components/cart.js';

const Header = (props) => {

  return (
    <>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bookazon
          </Typography>
          <Categories />
          <Cart />
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
};

export default Header;