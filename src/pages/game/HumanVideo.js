import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import YouTubePlayer from 'react-player/lib/players/YouTube'

const URL = "https://www.youtube.com/watch?v=LDU_Txk06tM";

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

class HumanVideo extends React.Component {
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
      <div className="humanVideo">
        Nice choice! The robot received your command.
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
      {this.state.videoDone ?
      <Button variant="contained" color="primary" className={classes.button} onClick={() => this.player.seekTo(0, "seconds")}>
      Replay
      </Button> : ""}
      {this.state.videoDone ?
      <Button variant="contained" color="primary" className={classes.button} onClick={() => this.player.seekTo(0, "seconds")}>
      Continue
      </Button> : ""}
      {this.state.playtime > 0 && !this.state.videoDone? "Finish watching the video to proceed." : "" } 
      </div>
      
    );
  }
}

export default withStyles(styles)(HumanVideo);
