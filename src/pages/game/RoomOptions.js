import React from 'react';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  card: {
    minWidth: 275,
    marginBottom: 20,
    padding: 18,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' 
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  room: {
    width: '100%'
  },
  preview: {
    width: '50%'
  }
});

class RoomOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: 0
    }
    this.images = [
      require(`../../img/Room${this.props.stage * 4}.PNG`),
      require(`../../img/Room${this.props.stage * 4 + 1}.PNG`),
      require(`../../img/Room${this.props.stage * 4 + 2}.PNG`),
      require(`../../img/Room${this.props.stage * 4 + 3}.PNG`),
    ]
    this.rooms = [[0, "Room A"], [1, "Room B"], [2, "Room C"], [3, "Room D"]]
  }

  updateState = (req, data) => {
    this.setState({
      [req]: data
    });
  }

  updatePreview = (room) => {
    this.setState({
      preview: room
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="Rooms">
        <div className={classes.header}>
        <h1>Room Selection</h1>
        <Divider />
        <br />
          Choose a room for the robot to do by clicking a button. Hover over a room diagram to enlarge.
          <br/>
          <br/>
        </div>

        <Paper className={classes.paper}>
          <img className={classes.preview} src={this.images[this.state.preview]} alt="Enlarged"/>
        </Paper>
        <br/>
        
        <Grid container spacing={3}>
          {this.rooms.map((room, i) => (
          <Grid item xs={3} key={i}>
            <Paper className={classes.paper}>
              <img className={classes.room} src={this.images[room[0]]} alt={room[1]}
                onMouseOver={() => this.updatePreview(room[0])}/>
            </Paper>
            <br/>
            <Button variant="contained" color="primary" className={classes.button}
              onClick={() => this.props.nextPage(room[0])}>
              {room[1]}
            </Button>
          </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(RoomOptions);
