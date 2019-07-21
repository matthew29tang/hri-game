import React from 'react';
import { NavLink } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  button: {
    margin: theme.spacing(2),
  },
  input: {
    display: 'none',
  },
 
});

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    }
  }

  onChangeName = (name) => {
    this.setState({ name });
  }


  render() {
    const { classes } = this.props;

    return (
      <div>
        Introduction text here explaining the game.
        <br/>
        <NavLink className="link" type="menu" to={"/game"} >
            <Button variant="contained" color="primary" className={classes.button}>
              Begin
          </Button>
        </NavLink>
      </div>
    )
  }
}

export default withStyles(styles)(Intro);

