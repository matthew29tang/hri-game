import React from 'react';
import {
  HashRouter as Router,
  NavLink
} from "react-router-dom";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Routing from './Routing.js';
import styles from './navBarStyles.js'


class NavBar extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={classNames(classes.appBar)}
        >
          <Toolbar disableGutters={true} className={classes.toolbar}>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              HRI Game
              {/*<Router>
                <NavLink activeClassName="active" className="link" to={"/"} type="menu">
                  HRI Game
              </NavLink>
              </Router>*/}
            </Typography>
            {/*<Router>
              <NavLink activeClassName="active" className="link" to={"/about/"} type="menu">
                <Button color="inherit">About</Button>
              </NavLink>
            </Router>
            */}
          </Toolbar>
        </AppBar>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Routing />
        </main>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
