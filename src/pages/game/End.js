import React from 'react';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  card: {
    minWidth: 275,
    marginBottom: 20,
    padding: 18,
  },
  title: {
    fontSize: 14,
  },
  header: {
    fontSize: 18,
  },
  button: {
    margin: theme.spacing(1) * 2,
  },
  body: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 70,
    paddingRight: 70,
  }
});

class End extends React.Component {
  constructor(props) {
    super(props);
    this.state = { submitted: false }
  }

  submit = () => {
    this.setState({ submitted: true });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="debrief">
      {!this.state.submitted ?
        <div className="questions">
          <h1>Debrief</h1>
          <Divider />
          <br />
          Over the course of 5 rounds, you and the robot scored {this.props.totalScore} points!
          <br />
          <br />
          <div className={classes.body}>
            Please explain.
              <TextField
              id="outlined-multiline-flexible"
              label="Explanation"
              multiline
              fullWidth
              rows="6"
              rowsMax="20"
              onChange={this.props.saveText("debrief1")}
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </div>
          <Button variant="contained" color="primary" className={classes.button} onClick={() => this.setState({ submitted: true })}>
            Submit
            </Button>
          <br />
          </div> : <h2>Thank you for taking the time to play our game!</h2> }
      </div>
    );
  }
}

export default withStyles(styles)(End);
