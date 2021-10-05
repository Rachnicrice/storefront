import React from 'react';
import { connect } from 'react-redux';

const Products = (props) => {

  return (
    <>
     <h3>Products</h3>
     {console.log('products: ',props.products)}
     {props.products.map(product => {
       if (product.display) {
          return <p>
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

export default connect(mapStateToProps)(Products);