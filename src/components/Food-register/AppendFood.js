import React from 'react';

import MuiAlert from '@material-ui/lab/Alert';

import { Button, IconButton, Snackbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

export default function AppendFood() {
    const message = "記入欄を追加しました！";

    const [open, setOpen] = React.useState(false);
    const handle_onclick = () => {
        setOpen(true);
    }
    function handle_close(event, reason) {
        if (reason === 'clickaway')
            return;
        else
            setOpen(false);
    }

    return (
        <div>
            <Button
                variant="contained"
                color="secondary"
                fullWidth={true}
                onClick={handle_onclick}
            >
                食品を追加する</Button>
            {/* <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={open}
                autoHideDuration={1000}
                onClose={handle_close}
                message={message}
                action=
                {
                    <React.Fragment>
                        <IconButton
                            size="small"
                            aria-label="close"
                            color="inherit"
                            onClick={handle_close}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                } /> */}
            <Snackbar
                open={open}
                autoHideDuration={1000}
                onClose={handle_close}
            >
                <MuiAlert
                    elevation={6}
                    variant="filled" 
                    onClose={handle_close}
                    severity="success"
                >
                    {message}
                </MuiAlert>
            </Snackbar>
        </div >
    );
}
