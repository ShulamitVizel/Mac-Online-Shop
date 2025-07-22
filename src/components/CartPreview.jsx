import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Typography,
  Button,
  Divider,
  IconButton,
  Avatar,
  Tooltip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { removeItem } from "../redux/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartPreview = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (id, title) => {
    dispatch(removeItem(id));
    toast.info(`Removed "${title}" from cart`, {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
    });
  };

  return (
    <Box
      sx={{
        maxHeight: "720px",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 1,
        color: "black",
        px: 1,
      }}
    >
      <ToastContainer />
      {items.length === 0 ? (
        <Typography align="center" color="text.secondary">
          Your cart is empty
        </Typography>
      ) : (
        <>
          {items.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#fdf1f5",
                borderRadius: "8px",
                padding: "8px",
              }}
            >
              {/* תמונה ממוזערת */}
              <Avatar
                src={item.thumbnail || item.image || ""}
                alt={item.title}
                variant="square"
                sx={{ width: 60, height: 60, mr: 1 }}
              />

              {/* פרטי המוצר */}
              <Box sx={{ flexGrow: 1 }}>
                <Typography fontWeight="bold" fontSize="0.9rem">
                  {item.title}
                </Typography>
                <Typography variant="body2">
                  Quantity: {item.quantity}
                </Typography>
              </Box>

              {/* מחיר */}
              <Typography
                fontWeight="bold"
                fontSize="0.9rem"
                color="#e91e63"
                sx={{ mx: 1 }}
              >
                ₪{item.price * item.quantity}
              </Typography>

              {/* איקס להסרה עם Tooltip */}
              <Tooltip title="Remove from cart" arrow>
                <IconButton
                  onClick={() => handleRemove(item.id, item.title)}
                  size="small"
                  sx={{ color: "#333" }}
                >
                  ✖
                </IconButton>
              </Tooltip>
            </Box>
          ))}

          <Divider sx={{ my: 1 }} />

          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#ff4081",
              fontWeight: "bold",
              borderRadius: "8px",
              mt: 1,
              ":hover": { backgroundColor: "#f50057" },
            }}
            onClick={() => navigate("/cart")}
          >
            Go to Cart
          </Button>
        </>
      )}
    </Box>
  );
};

export default CartPreview;
