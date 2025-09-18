import React from 'react';
import { Grid, Box, Card } from '@mui/material';

import OuterLayout from '../Layouts/OuterLayout.jsx';
import useFetch from '../hooks/useFetch.jsx';
import apiConfig from '../API/config.js';
import ProductList from '../Components/Product/ProductList.jsx';
import Cart from '../Components/Cart.jsx';

const Products = () => {
    const {
        isLoading: productListLoadingStatus,
        data: productsList,
        error: productsListError,
    } = useFetch(apiConfig?.getProducts);

    return (
        <OuterLayout>
            <Grid container spacing={2} m={2} height="100%" justifyContent={'center'}>
                <Grid size={6} container>
                    <Card sx={{width: "100%"}}>
                        <ProductList
                            products={productsList}
                            isLoading={productListLoadingStatus}
                            error={productsListError}
                        />
                    </Card>
                </Grid>

                <Grid size={6}>
                    <Card sx={{width: "100%"}}>
                        <Cart />
                    </Card>
                </Grid>
            </Grid>

        </OuterLayout>
    );
};

export default Products;
