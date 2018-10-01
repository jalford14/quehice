

import React from 'react';

class NewEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value || '',
            method: props.method || '',
            action: props.action || "/tasks"
        };

        this.handleChange = this.handleChange.bind(this);
    }
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

    handleChange(e) {
        this.setState({value: event.target.value});
    }

  render() {
      console.log(this.props)
    return(
            <div id="description">
                <form action={this.state.action} method="post">
                    <input type="hidden" name='authenticity_token' value={this.props.authenticity_token} />
                    <input type="hidden" name="_method" value={this.state.method} />
                    <input type="hidden" name="task[date]" value={this.getDate()} />
                    <input type="text" value={this.state.value} name="task[description]" autocomplete="off" autofocus="true" onChange={this.handleChange}/>
                </form>
            </div>
    );
  }
}
export default NewEntry