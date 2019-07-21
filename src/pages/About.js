import React from 'react';

import Divider from '@material-ui/core/Divider';

class About extends React.Component {

  render() {
    return (
      <div className="About">
        <h1>About</h1>
        <Divider />
        <br />
        <div align="left" word-wrap="break-word">
          Explanation here
        </div>
      </div>
    );
  }
}

export default About;