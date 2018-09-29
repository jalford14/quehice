
import React from 'react';


class NewEntry extends React.Component {
  render() {
    return(
      <a href = "#">

        <div class = "task_box">
       
            <div id = "date">{this.props.date}</div>
            <div id = "taskToDo">{this.props.task}</div>
            <div id = "edit">
              <img src='./trash_icon.png' />
            </div>
            <div id = "delete">
              <img src='./trash_icon.png' />
            </div>

        </div>
        
      </a>
    )
  }
}
export default NewEntry