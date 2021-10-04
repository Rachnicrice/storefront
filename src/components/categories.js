import React from 'react';
import { connect } from 'react-redux';
import { activate } from '../store/store.js';

let num=0;

const Categories = (props) => {

  return (
    <>
     <h2>Categories</h2>
     {props.storefront.categories.map(category => {
          return <p onClick={() => props.activate(category)} key={num++}>
            {category.name}
          </p>
      })}
    </>
  );
};

const mapStateToProps = state => ({
  storefront: state.storefront,
});

const mapDispatchToProps = { activate };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);