import React, {Component} from 'react';
import {fetchData, getFields} from '../util'
import logo from '../logo.png';
import Header from '../components/Header/Header'
import Filter from '../components/Filter/Filter'
import Table from '../components/Table/Table'
import Summary from '../components/Summary/Summary'
import './Dashboard.css';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }
  componentWillMount() {
    if (this.state.data.length === 0) {
      fetchData().then((res) => {
        this.setState({
          fields: getFields(res),
          data: res
        }, () => console.log("data", this.state))
      })
    }

  }
  apply = (filter) => {
    fetchData(filter).then((res) => {
      this.setState({
        fields: [],
        data: []
      }, () => {
        this.setState({fields: getFields(res), data: res})
      })
    })
  }
  render() {
    return (
      <div className="Dashboard ">
        <Header/>
        <div className="container">
          {this.state.data.length > 0
            ? 
            <div>
              <Summary reports={this.state.data.length} blacklisted={this.state.data.filter((e)=> e.blacklisted).length}/>
            <Filter fields={this.state.fields} apply={this.apply}/>
            <Table
                table_head={['ip', 'date', 'domain', 'blacklisted', 'event type']}
                data={this.state.data}/>
                </div>
            : <div className="modal is-active">
              <div className="modal-background"></div>
              <div className="">
                <div className="loading">
                  <img src={logo} className="logo" alt="logo"/>
                </div>

              </div>
              <button className="modal-close is-large" aria-label="close"></button>
            </div>
}
        </div>
      </div>
    );
  }
}

export default Dashboard;
