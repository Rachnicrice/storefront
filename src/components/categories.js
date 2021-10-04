import React from 'react';
import { connect } from 'react-redux';

const Categories = (props) => {

  return (
    <>
     <h2>Categories</h2>
     {props.storefront.categories.map(category => {
          return <p>
            {category.name}
          </p>
      })}
    </>
  );
};

const mapStateToProps = state => ({
  storefront: state.storefront,
});

export default connect(mapStateToProps)(Categories);