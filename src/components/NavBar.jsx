import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { AppBar, Toolbar, Typography, Button, Box, Badge, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import cartIcon from "../assets/add-to-basket.png";
import logo from "../assets/brand.png";
import CartPreview from "./CartPreview";

const Navbar = () => {
  const { items } = useSelector((state) => state.cart);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const [isOpen, setIsOpen] = useState(false);
  const previewRef = useRef();

  // סגירה כאשר לוחצים מחוץ לתצוגת העגלה
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (previewRef.current && !previewRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/products/face", label: "Face" },
    { path: "/products/eyes", label: "Eyes" },
    { path: "/products/lips", label: "Lips" },
  ];

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#000", padding: "0.5rem 0", zIndex: 1201 }}>
        <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>

          {/* עגלה + כפתור פתיחה */}
          <Box sx={{ position: "relative", display: "inline-block" }} ref={previewRef}>
            <IconButton onClick={() => setIsOpen((prev) => !prev)} sx={{ p: 0 }}>
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
                <img src={cartIcon} alt="Cart" style={{ width: "40px", height: "40px" }} />
              </Badge>
            </IconButton>

            {/* תיבת תצוגה נפתחת בלחיצה */}
            {isOpen && (
              <Box
                sx={{
                  position: "absolute",
                  top: "50px",
                  left: "50%",
                  transform: "translateX(-10%)",
                  width: "400px",
                  backgroundColor: "white",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                  borderRadius: "8px",
                  padding: "16px",
                  zIndex: 1300,
                }}
              >
                <CartPreview />
              </Box>
            )}
          </Box>

          {/* קישורי ניווט */}
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
                  fontFamily: "'Quattrocento', serif",
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          {/* לוגו */}
          <Box>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: "#fff",
                  fontFamily: "'Marck Script', cursive",
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
