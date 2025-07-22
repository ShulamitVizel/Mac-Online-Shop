import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  fetchProducts,
  selectProducts,
  selectIsLoading,
  selectError,
} from '../redux/productsSlice';
import { addItem } from '../redux/cartSlice';
import {
  Grid,
  Typography,
  Container,
  Skeleton,
} from '@mui/material';
import Product from '../components/Product';

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

  const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <Container sx={{ padding: '20px', minHeight: '100vh', color: '#000' }}>
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
        }}
      >
        {capitalizedCategory} Products
      </Typography>

      {isLoading && (
        <Typography
          variant="body1"
          sx={{ textAlign: 'center', color: '#999', marginBottom: '10px' }}
        >
          Loading products...
        </Typography>
      )}

      {error ? (
        <Typography color="error" textAlign="center">
          {error}
        </Typography>
      ) : (
        <Grid container spacing={4} justifyContent="center">
          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => (
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <div
                    style={{
                      border: '1px solid #eee',
                      borderRadius: '12px',
                      padding: '16px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    }}
                  >
                    <Skeleton
                      variant="rectangular"
                      width="100%"
                      height={180}
                      sx={{ borderRadius: '8px' }}
                    />
                    <Skeleton variant="text" height={30} sx={{ mt: 2, mb: 1 }} />
                    <Skeleton variant="text" width="40%" height={25} />
                    <Skeleton
                      variant="rounded"
                      width="100%"
                      height={36}
                      sx={{ mt: 2, borderRadius: '20px' }}
                    />
                  </div>
                </Grid>
              ))
            : filteredProducts.length === 0 ? (
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
