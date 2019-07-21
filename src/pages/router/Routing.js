import React from "react";
import {
  Route,
  HashRouter as Router,
  Switch
} from "react-router-dom";

import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Notfound from "./notfound.js";
import Intro from '../Intro.js';
import Game from '../game/Game.js';
import About from "../About.js";

const styles = theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
});

const routing = (
  <Router>
    <div className="Router">
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route path="/game/" component={Game} />
        <Route path="/about/" component={About} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

class Routing extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Box width="75%" maxWidth={1000}>
          <Paper className={classes.root}>
            {routing}
          </Paper>
        </Box>
      </Grid>
    );
  }
}

export default withStyles(styles)(Routing);
