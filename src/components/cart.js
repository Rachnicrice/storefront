import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../store/reducers/cart';

const Cart = (props) => {

  return (
    <>
     <h2>Cart</h2>
     {props.cart.map((item, i) => {
          return <p onDoubleClick={() => props.removeFromCart(item)} key={i}>
            {item.name}
          </p>
      })}
    </>
  );
};

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = { removeFromCart };

export default connect(mapStateToProps, mapDispatchToProps)(Cart);