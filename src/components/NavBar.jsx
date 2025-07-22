import React from "react";
import { useSelector } from "react-redux";
import { AppBar, Toolbar, Typography, Button, Box, Badge } from "@mui/material";
import { NavLink } from "react-router-dom";
import cartIcon from "../assets/add-to-basket.png";
import logo from "../assets/brand.png";

const Navbar = () => {
  const { items } = useSelector((state) => state.cart);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/products/face", label: "Face" },
    { path: "/products/eyes", label: "Eyes" },
    { path: "/products/lips", label: "Lips" },
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Parisienne&display=swap"
        rel="stylesheet"
      />
      <AppBar position="fixed" sx={{ backgroundColor: "#000", padding: "0.5rem 0", zIndex: 1201 }}>
        <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <Box>
            <NavLink to="/cart" style={{ textDecoration: 'none' }}>
              <Badge
                badgeContent={totalItems}
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "#ff4081",
                    color: "white",
                    fontSize: "12px",
                    minWidth: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    fontWeight: "bold",
                  },
                }}
              >
                <img src={cartIcon} alt="add-to-basket" style={{ width: "40px", height: "40px" }} />
              </Badge>
            </NavLink>
          </Box>

          <Box sx={{ display: "flex", gap: "5rem", fontFamily: "'Parisienne', cursive" }}>
            {navLinks.map((link) => (
              <Button
                key={link.path}
                component={NavLink}
                to={link.path}
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  textTransform: "none",
                  fontSize: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  "&.active": { borderBottom: "2px solid #ff4081" },
                  fontFamily: " 'Quattrocento', serif",
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          <Box>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontWeight: "bold",
                  color: "#fff",
                  fontFamily: " 'Marck Script', cursive",
                }}
              >
                <img src={logo} alt="brand" />
              </Typography>
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ height: "80px" }} />
    </>
  );
};

export default Navbar;