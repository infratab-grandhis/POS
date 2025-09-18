import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  Box,
} from "@mui/material";

const Cart = ({ cartItems, onRemove, onPay }) => {
  const totalAmount = 0;
  return (
    <Box m={2}>
      <TableContainer component={Paper} sx={{ mb: 2 }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#222" }}>
            <TableRow>
              <TableCell sx={{ color: "white" }}>#</TableCell>
              <TableCell sx={{ color: "white" }}>Name</TableCell>
              <TableCell sx={{ color: "white" }}>Price</TableCell>
              <TableCell sx={{ color: "white" }}>Qty</TableCell>
              <TableCell sx={{ color: "white" }}>Total</TableCell>
              <TableCell sx={{ color: "white" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems?.map((item, idx) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>₹{item.price}</TableCell>
                <TableCell>{item.qty}</TableCell>
                <TableCell>₹{item.price * item.qty}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => onRemove(item.id)}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h6" sx={{ mb: 2 }}>
        Total Amount: ₹{totalAmount}
      </Typography>

      <Button variant="contained" color="primary" onClick={onPay}>
        Pay Now
      </Button>
    </Box>
  );
};

export default Cart;
