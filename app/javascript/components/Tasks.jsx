import React from "react"

// Components
import NewEntry from './Tasks/newEntry';

class Tasks extends React.Component {
  render () {
    return (
      <React.Fragment>

           <NewEntry />
           
      </React.Fragment>
      
    );
  }
}

export default Tasks