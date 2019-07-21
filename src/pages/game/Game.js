import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import {rewards, successes} from '../config.js'
import RoomOptions from './RoomOptions.js';
import HumanVideo from './HumanVideo.js';

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
  }
});

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      stage: 0,
      score: 0,
      page: "chooseRoom"
    }
  }

  // Add human/robot moves to history
  _updateHistory = (move) => {
    this.setState(state => {
      const history = state.history.concat(move);
      return {history}
    })
  }

  // Stages go from 0 to 4, 5 indicates a finished game.
  incrementStage = () => {
    this.setState(state => {
      return {stage: state.stage + 1}
    });
  }

  _updateScore = (chosenRoom) => {
    const success = successes[this.state.stage][chosenRoom]
    const newPoints = rewards[this.state.stage][chosenRoom] ? success : 0
    this.setState(state => {
      return {score: state.score + newPoints}
    })
  }

  _updatePage = (newPage) => {
    this.setState({
      page: newPage
    })
  }

  chooseRoom = (room) => {
    this._updateScore(room);
    this._updateHistory(room);
    this._updatePage("humanVideo");
  }

  // Legacy
  updateState = (req, data) => {
    this.setState({
      [req]: data
    });
  }

  render() {
    return (
      <div className="game">
        {this.state.page === "chooseRoom" ? 
          <RoomOptions stage={this.state.stage} chooseRoom={this.chooseRoom}/> : ""}
        {this.state.page === "humanVideo" ? 
          <HumanVideo stage={this.state.stage} action={this.state.history[this.state.history.length - 1]}/> : ""}  
      </div>
    );
  }
}

export default withStyles(styles)(Game);
