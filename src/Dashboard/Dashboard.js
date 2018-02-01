import React, {Component} from 'react';
import {fetchData, getFields, getTopIp} from '../util'
import logo from '../logo.png';
import Header from '../components/Header/Header'
import Filter from '../components/Filter/Filter'
import Table from '../components/Table/Table'
import Summary from '../components/Summary/Summary'
import Prediction from '../components/Prediction/Prediction'
import './Dashboard.css';

/*
Main page component
*/
class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      showTop10:false,
      data: []
    }
  }
  componentWillMount() {
    //fetch data without filter
    if (this.state.data.length === 0) {
      fetchData().then((res) => {
        this.setState({
          fields: getFields(res),
          data: res
        }, () => console.log("data", this.state))
      })
    }

  }
  //show top 10 chart
  showTop10 = () =>{
    this.setState({showTop10:!this.state.showTop10})
  }
    //apply filter
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
        <Header showTop10={this.showTop10} showTop10Status={this.state.showTop10}/>
        <div className="container">
          {this.state.data.length > 0
            ? <div>
                {this.state.showTop10
                  ? <Prediction data={getTopIp(this.state.data)}/>
                  : <div>
                    <Summary
                      reports={this.state.data.length}
                      blacklisted={this
                      .state
                      .data
                      .filter((e) => e.blacklisted)
                      .length}/>
                     
                    <Filter fields={this.state.fields} apply={this.apply}/>
                    <Table
                      table_head={['ip', 'date', 'domain', 'blacklisted', 'event type']}
                      data={this.state.data}/>
                  </div>
              }
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
