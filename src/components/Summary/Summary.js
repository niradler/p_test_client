import React, {Component} from 'react';

class Summary extends Component {
    render() {
        return (
<div class="level is-mobile">
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Reports</p>
      <p class="title">{this.props.reports}</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Blacklisted</p>
      <p class="title">{this.props.blacklisted}</p>
    </div>
  </div>
</div>
                    )
                    }
}
export default Summary;