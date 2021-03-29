import React from 'react';
import { Grid, Box, Typography, Divider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';

import moment from 'moment';
import 'moment/locale/ja';
import Clock from './clock';

import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';



import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import KitchenIcon from '@material-ui/icons/Kitchen';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';


const bar_theme = createMuiTheme(
    {
        palette: {
            primary: {
                main: '#ffcc80',
            },
            secondary: {
                main: '#8bc34a',
            },
        },
    }
);

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({

    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

export default function PersistentDrawerLeft() {
    moment.locale('ja');


    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <ThemeProvider theme={bar_theme}>
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <Grid container
                            justify="space-between"
                            alignItems="center"
                            alignContents="center">
                            <Grid item xs={1}>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={handleDrawerOpen}
                                    edge="start"
                                    className={clsx(classes.menuButton, open && classes.hide)}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Grid>
                            <Grid item xs>
                                <Typography variant="h6" noWrap>
                                    {document.title}
                                </Typography>
                            </Grid>
                            <Grid item xs={3} >
                                <Typography variant="subtitle1">
                                    {moment().format('M/D (dd)')}
                                </Typography>
                                <Typography variant="h5">
                                    <Clock format="LT" />
                                </Typography>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>


            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button key="内容検索">
                        <ListItemIcon> <SearchIcon /></ListItemIcon>
                        <ListItemText primary="内容検索" />
                    </ListItem>
                    <ListItem button key="食品登録">
                        <ListItemIcon> <KitchenIcon /></ListItemIcon>
                        <ListItemText primary="食品登録" />
                    </ListItem>

                </List>
                <Divider />
                <List>
                    <ListItem button key="Settings">
                        <ListItemIcon> <SettingsIcon /></ListItemIcon>
                        <ListItemText primary="設定" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button key="AppConfig">
                        <ListItemIcon> <MenuIcon /></ListItemIcon>
                        <ListItemText primary="アプリ情報" />
                    </ListItem>
                </List>
            </Drawer>
        </div >
    );
}
