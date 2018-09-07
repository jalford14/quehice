

import React from 'react';

class NewEntry extends React.Component {
    constructor() {
        super();
        var today = new Date();
        
    }
  render() {
    return(
            <div id="description">
                <form action="/tasks" method="post">
                    <input type='hidden' name='authenticity_token' value={this.props.authenticity_token} />
                    <input type="hidden" name="task[date]" value={this.getDate} />
                    <input type="text" name="task[description]" autocomplete="off" autofocus="true"/>
                </form>
            </div>
    )
  }
}
export default NewEntry