

import React from 'react';

class NewEntry extends React.Component {
    // Gets a valid date for entry
    getDate() {
        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth() + 1;
        var day = today.getDate();
        
        if(day < 10) { day = '0' + day; } 
        
        if(month < 10) { month = '0' + month; } 
        
        var date = year + '' + month + '' + day;
        return date;
    }

  render() {
    return(
            <div id="description">
                <form action="/tasks" method="post">
                    <input type='hidden' name='authenticity_token' value={this.props.authenticity_token} />
                    <input type="hidden" name="task[date]" value={this.getDate()} />
                    <input type="text" name="task[description]" autocomplete="off" autofocus="true"/>
                </form>
            </div>
    )
  }
}
export default NewEntry