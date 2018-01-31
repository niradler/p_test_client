import React, {Component} from 'react';
import {fetchData,getFields} from '../util'
import logo from '../logo.png';
import Filter from '../components/Filter/Filter'
import Table from '../components/Table/Table'
import './Dashboard.css';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }
  componentWillMount() {
    fetchData().then((res) => {
      this.setState({
        fields:getFields(res),
        data: res
      },()=>console.log("data",this.state))
    })
  }

  render() {
    return (
      <div className="Dashboard container">
        {/* <header >
          <img src={logo} className="logo" alt="logo" />
        </header> */}
        {this.state.data.length > 0 ?
        <Filter fields={this.state.fields}/>
        :"Loading..."}
        {this.state.data.length > 0 ?
        <Table 
        table_head={['ip','date','domain','blacklisted','event type']}
        data={this.state.data}
        />
        :"Loading..."}

      </div>
    );
  }
}

export default Dashboard;
