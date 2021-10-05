import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../store/reducers/cart';

const Products = (props) => {

  return (
    <>
     <h3>Products</h3>
     {props.products.map((product, i) => {
       if (product.display) {
          return <p onDoubleClick={() => props.addToCart(product)} key={i}>
            {product.name}
          </p>
       } else {
         return null;
       }
      })}
    </>
  );
};

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = { addToCart };

export default connect(mapStateToProps, mapDispatchToProps)(Products);