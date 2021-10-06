import React from 'react';
import { connect } from 'react-redux';
import { activate } from '../store/reducers/categories.js';
import { Button, ButtonGroup } from '@mui/material';

const Categories = (props) => {

  return (
    <>
     <ButtonGroup>
      {props.storefront.categories.map((category, i) => {
            return <Button color="inherit" onClick={() => props.activate(category)} key={i}>
              {category.displayName}
            </Button>
        })}
     </ButtonGroup>
    </>
  );
};

const mapStateToProps = state => ({
  storefront: state.categories,
});

const mapDispatchToProps = { activate };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);