import React from 'react';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import YouTubePlayer from 'react-player/lib/players/YouTube'
import {rewards, rooms} from '../config.js';

const URL = "https://www.youtube.com/watch?v=FTQbiNvZqaY";

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
});

class RobotVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      playtime: 0,
      videoDone: false,
    }
  }

  playVideo = () => {
    this.setState({
      playing: true
    });
  }

  updateState = (req, data) => {
    this.setState(state => {
      const vid = state.playtime > 0.99 || state.videoDone
      return {[req]: data.played, videoDone: vid}
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="RobotVideo">
        <h1> Robot's choice</h1>
        <Divider />
        <br />
        The robot has chosen to attempt {rooms[this.props.action]} worth {parseInt(rewards[this.props.stage][this.props.action])} points. 
        Click the button to see the results.
        <br />
        <br />
        {this.state.playing ? 
        <div className = "player-wrapper">
          <center>
            <YouTubePlayer 
              className='react-player' 
              url={URL}
              playing={this.state.playing}
              controls
              onProgress={(time) => this.updateState("playtime", time)}
              ref={player => {
                this.player = player;
              }}/>
          </center>
        </div> : ""}
        
        {!this.state.playing ? 
          <Button variant="contained" color="primary" className={classes.button} onClick={this.playVideo}>
                Play Video
          </Button> : ""}
      <br/>
      {this.state.videoDone && this.props.roundScore > 0 ? 
        `The robot succeeded! Your total score is ${this.props.roundScore} point(s). Click continue to play another round with the same robot!` : ""}
      {this.state.videoDone && this.props.roundScore === 0 ? 
        `Unfortunately the robot failed the room. Your total score is ${this.props.roundScore} point(s) Click continue to play another round with the same robot!` : ""}  
      {this.state.videoDone ?
      <div className="buttons">
        <Button variant="contained" color="primary" className={classes.button} onClick={() => this.player.seekTo(0, "seconds")}>
        Replay
        </Button>
        <Button variant="contained" color="primary" className={classes.button} onClick={this.props.nextPage}>
        Continue
        </Button>
      </div> : ""}

      {this.state.playtime > 0 && !this.state.videoDone? "Finish watching the video to proceed." : "" } 
      </div>
      
    );
  }
}

export default withStyles(styles)(RobotVideo);
