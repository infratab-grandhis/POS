import React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Box,
    Grid,
    Table,
    TableRow,
    TableCell,
    TextField
} from "@mui/material";

const ProductInfo = ({ product }) => {
    return (
        <>
            <CardMedia
                component="img"
                image={product?.image}
                alt={product?.name}
                sx={{
                    width: "100%",
                    height: 150,
                    objectFit: "cover",
                }}
            />
            <CardContent>
                <Typography variant="body2">
                    Name: <Typography component="span" fontWeight="bold">{product?.name}</Typography>
                </Typography>
                <Typography variant="body2">
                    Price: <Typography component="span" fontWeight="bold">{`₹${product?.price}`}</Typography>
                </Typography>
            </CardContent>
        </>
    );
}


export default ProductInfo;