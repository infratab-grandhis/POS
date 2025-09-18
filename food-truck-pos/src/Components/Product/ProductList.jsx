import React, { useState } from "react";
import {Grid} from "@mui/material";

import Loader from "../Loader";
import ErrorMessage from "../Message";
import Product from "./Product";

const ProductList = ({ products, isLoading, error }) => {

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage config={{color: 'error', message: error?.message}} />;

  return (
    <Grid container spacing={2} m={2}>
        {
            products?.map((product) => (<Product product={product}/>))
        }
    </Grid>
  );
};

export default ProductList;
