import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProducts, selectProducts, selectIsLoading, selectError } from '../redux/productsSlice';
import { addItem } from '../redux/cartSlice';
import { Grid, Typography, Container, CircularProgress } from '@mui/material';
import Product from '../components/Product';
import lSpinner from '../assets/https___dev-to-uploads.s3.amazonaws.com_uploads_articles_dkf5jym2t51hf098ppgs.gif'

const ProductsPage = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(selectProducts) || [];
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products]);

  const filteredProducts = products.filter((product) => product.category === category);
  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <Container
      sx={{
        padding: '20px',
        minHeight: '100vh',
        color: '#000',
      }}
    >
      {isLoading && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh',
          }}
        >
          <img src={lSpinner} alt="Spinner-1s-200px" width="250px" height="250px" />
        </div>
      )}
      {!isLoading && !error && (
        <Typography
          variant="h3"
          sx={{
            textAlign: 'center',
            marginBottom: '30px',
            fontWeight: 'bold',
            fontSize: '2.5rem',
            background: 'linear-gradient(90deg, #ff4081, #ff80ab)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.3s, text-shadow 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
            },
          }}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)} Products
        </Typography>
      )}

      {isLoading ? (
        <Typography> {}</Typography>
      ) : error ? (
        <Typography color="error" textAlign="center">
          {error}
        </Typography>
      ) : (
        <Grid container spacing={4} justifyContent="center">
          {filteredProducts.length === 0 ? (
            <Typography variant="body1" sx={{ textAlign: 'center', color: '#888' }}>
              No products available in this category.
            </Typography>
          ) : (
            filteredProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Product product={product} onAddToCart={handleAddToCart} />
              </Grid>
            ))
          )}
        </Grid>
      )}
    </Container>
  );
};

export default ProductsPage;
