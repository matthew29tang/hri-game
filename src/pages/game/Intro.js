import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const styles = theme => ({
  button: {
    margin: theme.spacing(2),
  },
  input: {
    display: 'none',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  body: {
    textAlign: 'left'
  }
});


class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    }
  }

  

  render() {
    const { classes } = this.props;

    return (
      <div>
        Introduction text here explaining the game.
        <p>
        By playing this game, you agree to take part in data collection 
        which will keep a record of your score and actions in this game.
        </p>
        
        <TextField
          id="outlined-name"
          label="Name"
          defaultValue=""
          className={classes.textField}
          margin="normal"
          onChange={this.props.setName('name')}
          variant="outlined"
        />
        <br />
        <br />
        <FormControlLabel
        control={
          <Checkbox
            checked={this.state.checked}
            onChange={this.props.validData}
            color="primary"
          />
        }
        label="This is my first time playing this game"
      />
        <br />
        <Button variant="contained" color="primary" className={classes.button}
          onClick={this.props.nextPage}
          disabled={this.props.name.length <= 2} >
          Begin
        </Button>
      </div>
    )
  }
}

export default withStyles(styles)(Intro);

