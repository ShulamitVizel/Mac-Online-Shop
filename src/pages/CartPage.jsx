import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCart, updateQuantity, removeItem, toggleDelivery, clearCart } from "../redux/cartSlice";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Dialog, DialogTitle, DialogActions, Typography } from "@mui/material";
import deleteIcon from '../assets/delete.png';
import vanIcon from '../assets/van.png';
import { styled } from "@mui/material/styles";

const PinkCheckbox = styled(Checkbox)({
  color: "#ff4081",
  "&.Mui-checked": {
    color: "#ff4081",
  },
});

const CartPage = () => {
  const { items, deliveryCharge } = useSelector(selectCart);
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = React.useState(false);
  const total = items.reduce((sum, item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 0;
    return sum + price * quantity;
  }, deliveryCharge);

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleQuantityChange = (id, amount) => {
    dispatch(updateQuantity({ id, amount }));
  };

  const handleToggleDelivery = (event) => {
    dispatch(toggleDelivery(event.target.checked));
  };

  const handleCheckout = () => {
    setOpenDialog(true);
  };

  const confirmCheckout = () => {
    dispatch(clearCart());
    setOpenDialog(false);
  };

  return (
    <div style={{ padding: "20px" }}>
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
        My Shopping Cart
      </Typography>

      {items.length === 0 ? (
        <Typography variant="h6" sx={{ textAlign: "center", color: "#666", marginTop: "50px" }}>
          Please add a product to your shopping cart to complete the purchase process. 🛒
        </Typography>
      ) : (
        <>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell></TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Total</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <img src={item.image_url} alt={item.name} style={{ width: "50px", height: "50px", borderRadius: "5px" }} />
                    </TableCell>
                    <TableCell >{item.name}</TableCell>
                    <TableCell>₪{item.price}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        sx={{ color: "#ff4081", fontWeight: "bold", fontSize: "22px" }}
                      >
                        -
                      </Button>
                      {item.quantity}
                      <Button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        sx={{ color: "#ff4081", fontWeight: "bold", fontSize: "20px" }}
                      >
                        +
                      </Button>
                    </TableCell>
                    <TableCell>₪{(Number(item.price) || 0) * (Number(item.quantity) || 0)}</TableCell>
                    <TableCell>
                      <Button onClick={() => handleRemove(item.id)}>
                        <img src={deleteIcon} alt="delete" style={{ width: "24px", height: "24px" }} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
      <PinkCheckbox
  checked={deliveryCharge > 0}
  onChange={handleToggleDelivery}
  sx={{
    marginRight: "8px",
  }}
/>
            <img
              src={vanIcon}
              alt="van"
              style={{
                width: "24px",
                height: "24px",
              }}
            />
            <Typography variant="body1" sx={{ marginLeft: "10px" }}>
              Add shipping cost
            </Typography>
          </div>

          <Typography variant="h6" sx={{ textAlign: "left", marginBottom: "20px" }}>
            Total to be paid: ₪{total}
          </Typography>
        </>
      )}

      {items.length > 0 && (
        <Button
          onClick={handleCheckout}
          variant="contained"
          sx={{
            backgroundColor: "#ff4081",
            color: "white",
            "&:hover": {
              backgroundColor: "#e63971",
            },
          }}
        >
          For payment
        </Button>
      )}

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle sx={{
          backgroundColor: "#ff4081",
          color: "white",
          textAlign: "center",
          padding: "20px",
          fontWeight: "bold",
        }}>
          Thank you for shopping with us! 🎉
        </DialogTitle>
        <Typography sx={{
          padding: "20px",
          textAlign: "center",
          fontSize: "1.2rem",
          color: "#333"
        }}>
          Your order is almost complete. Please confirm your payment to finalize the purchase. We appreciate your trust in us, and we hope you enjoy your new products! 😍
        </Typography>
        <DialogActions sx={{
          backgroundColor: "#f9f9f9",
          justifyContent: "center",
          padding: "20px"
        }}>
          <Button
            onClick={() => setOpenDialog(false)}
            sx={{
              backgroundColor: "#333",
              color: "white",
              "&:hover": {
                backgroundColor: "#555",
              },
              marginRight: "10px",
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={confirmCheckout}
            sx={{
              backgroundColor: "#ff4081",
              color: "white",
              "&:hover": {
                backgroundColor: "#e63971",
              },
            }}
          >
            Confirm Payment
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CartPage;

