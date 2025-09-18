import React, { useState } from "react";
import {
    Card,
    Typography,
    Grid,
    Table,
    TableRow,
    TableCell,
    TextField,
    Button
} from "@mui/material";

import ProductInfo from "./ProductInfo";

const Product = ({ product }) => {
    const [expanded, setExpanded] = useState(false);

    const renderCustomizations = () => {
        return product?.customization?.map(item => (
            <TableRow>
                <TableCell>
                    <Typography variant="body2">
                        {item?.label}<Typography component="span" fontWeight="bold">{`(₹${item?.price})`}</Typography>
                    </Typography>
                </TableCell>
                <TableCell>
                    <TextField
                        id="outlined-required"
                        size="small"
                        placeholder="Quanity"
                        type="number"
                    />
                </TableCell>
            </TableRow>
        ))
    }

    return (
        <Card
            sx={{
                width: "100%",
            }}
        >
            <Grid container spacing={1}>
                {/* Left side: image + details */}
                <Grid item size={4} m={1} onClick={() => setExpanded((prev) => !prev)}>
                    <ProductInfo product={product} />
                </Grid>

                {/* Right side: customizations (only visible when expanded) */}
                {expanded && (
                    <Grid item size={6}>
                        <Table>
                            <TableRow>
                                <TableCell>Quantity</TableCell>
                                <TableCell>
                                    <TextField
                                        id="outlined-required"
                                        size="small"
                                        placeholder="Enter Quantity"
                                        type="number"
                                    />
                                </TableCell>
                            </TableRow>
                        </Table>
                        <Typography variant="body2" component="span" fontWeight="bold">Customizations</Typography>
                        <Table>{renderCustomizations()}</Table>
                    </Grid>
                )}
                
                 {/* Add Button */}
                <Grid item size='grow' alignSelf='center'>
                    <Button variant='contained'>Add</Button>
                </Grid>
            </Grid>
        </Card>
    );
};

export default Product;