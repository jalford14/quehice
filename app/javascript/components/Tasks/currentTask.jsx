
import React from 'react';

class NewEntry extends React.Component {
  render() {
    return(
      <a href = "#">

        <div class = "task_box">
       
            <div id = "date">{this.props.date}</div>
            <div id = "taskToDo">{this.props.task}</div>

        </div>
        
      </a>
    )
  }
}
export default NewEntry