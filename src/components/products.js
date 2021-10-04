import React from 'react';
import { connect } from 'react-redux';

const Products = (props) => {

  return (
    <>
     <h3>Products</h3>
     {props.storefront.activeCategory.products.map(product => {
          return <p>
            {product.title}
          </p>
      })}
    </>
  );
};

const mapStateToProps = state => ({
  storefront: state.storefront,
});

export default connect(mapStateToProps)(Products);