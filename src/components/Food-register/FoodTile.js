import React from 'react';
import { Box, Grid, TextField, Button, Divider, Typography } from '@material-ui/core';
import moment from 'moment';
import CropFreeOutlinedIcon from '@material-ui/icons/CropFreeOutlined';

export default class FoodTile extends React.Component {
    constructor(props) {
        super(props);
        this.jan = this.props.JAN;
        this.tana = this.props.TANA;
        this.enum = this.props.ENUM;
    }
    render() {
        return (
            <Box py={0}>
                <Grid container
                    justify="space-evenly"
                    alignItems="center">
                    <Grid item xs>
                        <Typography nowrap={true}>
                            {this.enum}
                        </Typography>
                    </Grid>
                    <Grid item xs={11}>
                        <Box py={2}>
                            <Grid
                            spacing={1}
                                container
                                alignItems="center"
                            >
                                <Grid item xs>
                                    <Button variant="contained"
                                        color="primary"
                                        disabled={false}
                                        startIcon={<CropFreeOutlinedIcon />}
                                        fullWidth={true}
                                    >バーコード読取</Button>
                                </Grid>
                                <Grid item xs={1}>or</Grid>
                                <Grid item xs>
                                    <TextField
                                        label="JANコード"
                                        variant="standard"
                                        type="string"
                                        helperText="数字を入力してください"
                                        rows="1"
                                        defalutValue={this.jan}
                                        fullWidth /></Grid>

                            </Grid>
                        </Box>
                        <Box pt={1} pb={2}>
                            <Grid container
                                spacing={2}
                                alignItems="center">
                                <Grid item xs>
                                    <TextField
                                        label="食品名"
                                        placeholder="食品名を入力してください"
                                        variant="standard"
                                        fullWidth /></Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        label="賞味期限"
                                        type="date"
                                        defaultValue={moment().format('YYYY-MM-DD')}
                                        variant="standard"

                                        fullWidth
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                        <Box pt={1} pb={2}>
                            <Grid container
                                spacing={2}
                                alignItems="center">
                                <Grid item xs>
                                    <Button variant="outlined"
                                        color="primary"
                                        /*  disabled={true} */
                                        fullWidth={true}>登録</Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
                <Divider />
            </Box>
        );
    }
}