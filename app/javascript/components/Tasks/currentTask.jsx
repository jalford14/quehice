
import React from 'react';

class NewEntry extends React.Component {
  render() {
    return(
      <a href = "#">

        <div class = "task_box">
       
            <div id = "plus_sign">Date</div>
            <div id = "new_entry">{this.props.task}</div>

        </div>
        
      </a>
    )
  }
}
export default NewEntry