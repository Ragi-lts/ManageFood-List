import React from 'react';


import { Button } from '@material-ui/core';
import { Box, Grid, GridList } from '@material-ui/core';
import { Typography, Divider } from '@material-ui/core';

import { flexbox } from '@material-ui/system';

import AppendFood from './Food-register/AppendFood';
import FoodTile from './Food-register/FoodTile';


class Register extends React.Component {

    constructor() {
        super();
        this.foodtile = [
            <FoodTile
                JAN=""
                TANA="1"
                ENUM="1"
            />,
        ];

    }

    render() {
        return (
            <div >

                <Grid container direction="column"
                    justify="center"
                    alignItems="center">
                    <Grid item xs>
                        <Typography variant="h4" gutterBottom>
                            食品登録
                    </Typography></Grid>
                </Grid>
                <Divider />
                <Box py={2}>
                    <Typography >棚に入れる食品登録をするページです。</Typography>
                </Box>

                <Box px={2}>

                    <Box my={1}>

                        <AppendFood/>

                        <Box m={2} display=""
                            borderColor="primary.main">
                            <Divider />
                            {this.foodtile}
                        </Box>

                    </Box>
                </Box>

            </div>

        );
    }
}


export default Register;
