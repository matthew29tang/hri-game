import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import { rewards, successes, robot_actions } from '../config.js'
import Intro from './Intro.js';
import RoomOptions from './RoomOptions.js';
import HumanVideo from './HumanVideo.js';
import RobotVideo from './RobotVideo.js';
import End from './End.js';


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
      name: '',
      valid: false,
      history: [],
      stage: 0,
      score: 0,
      page: 'chooseRoom',//"intro",
      roundScore: 0,
      id: 'null',
    }
  }

  // Add human/robot moves to history
  _updateHistory = (move) => {
    this.setState(state => {
      const history = state.history.concat(move);
      return { history }
    })
  }

  _updateScore = (chosenRoom, type) => {
    const success = successes[this.state.stage][chosenRoom]
    const newPoints = success ? rewards[this.state.stage][chosenRoom] : 0
    console.log("Gained " + newPoints + " pts");
    this.setState(state => {
      return { score: state.score + newPoints }
    })
    if (type === "human") {
      this.setState({ roundScore: newPoints })
    } else {
      this.setState(state => {
        return { roundScore: state.roundScore + newPoints }
      })
    }
  }

  _updatePage = (newPage) => {
    this.setState({
      page: newPage
    })
  }

  // Intro screen --> Human room options
  beginGame = () => {
    this._updatePage("chooseRoom");
    const id = Math.floor(Math.random() * 2 ** 16);
    this.setState({id: id})
  }

  saveText = name => event => {
    this.setState({ [name]: event.target.value });
  };

  validData = () => {
    this.setState(state => {
      const validData = !state.valid
      return { valid: validData }
    })
  }

  // Human chooses room --> Human action video
  chooseRoom = (room) => {
    this._updateScore(room, "human");
    this._updateHistory(room);
    this._updatePage("humanVideo");
  }

  // Human action video --> Robot action video
  getRobotAction = () => {
    // Index into the cached mcts results to get robot action
    const robotAction = robot_actions[this.state.history.join('')]
    this._updateScore(robotAction, "robot");
    this._updateHistory(robotAction);
    this._updatePage("robotVideo");
  }

  // Stages go from 0 to 4, 5 indicates a finished game.
  incrementStage = () => {
    this.setState(state => {
      return { stage: state.stage + 1, roundScore: 0 }
    });
    if (this.state.stage < 5) {
      this._updatePage("chooseRoom");
    } else {
      this._updatePage("end")
    }
  }

  render() {
    return (
      <div className="game">
        {this.state.page === "intro" ?
          <Intro
            nextPage={this.beginGame}
            setName={this.saveText}
            validData={this.validData}
            name={this.state.name} /> : ""}
        {this.state.page === "chooseRoom" ?
          <RoomOptions
            stage={this.state.stage}
            nextPage={this.chooseRoom} /> : ""}
        {this.state.page === "humanVideo" ?
          <HumanVideo
            stage={this.state.stage}
            action={this.state.history[this.state.history.length - 1]}
            score={this.state.roundScore}
            roundScore={this.state.roundScore}
            nextPage={this.getRobotAction}
            saveText={this.saveText}  /> : ""}
        {this.state.page === "robotVideo" ?
          <RobotVideo
            stage={this.state.stage}
            action={this.state.history[this.state.history.length - 1]}
            score={this.state.roundScore}
            roundScore={this.state.roundScore}
            nextPage={this.incrementStage}
            saveText={this.saveText}  /> : ""}
        {this.state.page === 'end' ? 
          <End
            totalScore={this.state.score}
            saveText={this.saveText} /> : ""}
      </div>
    );
  }
}

export default withStyles(styles)(Game);
