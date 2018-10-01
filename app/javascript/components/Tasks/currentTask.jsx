
import React from 'react';


class NewEntry extends React.Component {
  render() {
    return(
      <a href = "#">

        <div class = "task_box">
       
            <div id = "date">{this.props.date}</div>
            <div id = "taskToDo">{this.props.task}</div>
            <div id = "edit">
              <a href={this.props.editPath}>edit</a>
            </div>
            <div id = "delete">
              <a data-confirm="Are you sure?" href={this.props.deletePath} data-method="delete">delete</a>
            </div>

        </div>
        
      </a>
    )
  }
}
export default NewEntry