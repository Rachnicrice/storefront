import React from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';

import { addToCart } from '../store/reducers/cart';

const Products = (props) => {

  return (
    <>
     {props.products.map((product, i) => {
       if (product.display) {
          return <Card variant="outlined" sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="body2">
              {product.description}
            </Typography>
            <Typography variant="body2">
              {product.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => props.addToCart(product)} key={i}>Add to Cart</Button>
          </CardActions>
          </Card>
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