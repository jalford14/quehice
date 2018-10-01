import React from "react"

// Components
import Tasks from "./Welcome/tasks";
import History from "./Welcome/history";

class Welcome extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1 id = "title">&#191;Quehice?</h1>

        <div id = "container">
          <Tasks />
          <History />
        </div>
        
      </React.Fragment>
      
    );
  }
}

export default Welcome