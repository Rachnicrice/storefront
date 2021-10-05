import React from 'react';
import { connect } from 'react-redux';
import { activate } from '../store/reducers/categories.js';

const Categories = (props) => {

  return (
    <>
     <h2>Categories</h2>
     {props.storefront.categories.map((category, i) => {
          return <p onClick={() => props.activate(category)} key={i}>
            {category.displayName}
          </p>
      })}
    </>
  );
};

const mapStateToProps = state => ({
  storefront: state.categories,
});

const mapDispatchToProps = { activate };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);