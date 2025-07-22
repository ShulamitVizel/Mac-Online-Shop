import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const Product = ({ product, onAddToCart }) => {
  return (
    <Card
      sx={{
        maxWidth: 480,
        minHeight: 640,
        margin: '0 auto',
        borderRadius: '12px',
        border: '1px solid #000',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
        },
        backgroundColor: '#FFF0F5',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardMedia
        component="img"
        image={product.thumbnail}
        alt={product.name}
        sx={{
          height: 220,
          objectFit: 'contain',
          padding: '20px',
          backgroundColor: '#f9f9f9',
          borderRadius: '8px',
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: 'Raleway, Arial, sans-serif',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '20px',
            color: '#333',
            marginBottom: '5px',
            textTransform: 'uppercase',
          }}
        >
          {product.title}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            fontSize: '25px',
            color: '#ff4081',
            marginBottom: '10px',
            fontFamily: 'Raleway, Arial, sans-serif',
            textAlign: 'center',
          }}
        >
          ₪{product.price}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            fontSize: '18px',
            color: '#666',
            marginBottom: '12px',
            lineHeight: 1.6,
            fontFamily: 'Raleway, Arial, sans-serif',
            textAlign: 'center',
          }}
        >
          {product.description}
        </Typography>
      </CardContent>

      <Button
        variant="contained"
        color="primary"
        onClick={() => onAddToCart(product)}
        sx={{
          width: '80%',
          alignSelf: 'center',
          marginBottom: '20px',
          backgroundColor: '#ff4081',
          '&:hover': {
            backgroundColor: '#e63772',
          },
          padding: '10px 0',
          textTransform: 'none',
          fontWeight: 'bold',
          fontSize:'18px'
        }}
      >
        Add to Cart
      </Button>
    </Card>
  );
};

export default Product;