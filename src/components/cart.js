import { useState } from 'react';
import { connect } from 'react-redux';
import { When } from 'react-if';
import { Button, List, ListItem, ListItemButton, ListItemText, Popover } from '@mui/material';

import { removeFromCart } from '../store/reducers/cart';

const Cart = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <Button aria-describedby={id} color="inherit" variant="contained" onClick={handleClick}>
        Cart: {props.cart.length}
      </Button>
      <When condition={props.cart.length >= 1}>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose} 
          anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
          }}
          transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}>
          <List>
          {props.cart.map((item, i) => {
            return <ListItem disablePadding>
              <ListItemButton onDoubleClick={() => props.removeFromCart(item)} key={i}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          })}
          </List>
        </Popover>
      </When>
    </>
  );
};

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = { removeFromCart };

export default connect(mapStateToProps, mapDispatchToProps)(Cart);