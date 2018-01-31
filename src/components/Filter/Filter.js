import React, {Component} from 'react';

class Filter extends Component {
  constructor(props) {
    super();
    this.state = {
      form:{},
      fields:{
        ips_options:[],
        domains:[],
        blacklisted:['true','false'],
        events_options:[],
      }
    }
  }

  componentWillMount(){
    const fields =this.props.fields || this.state.fields;
    this.setState({
      fields:fields
    })
  }

  render() {
    return (
      <div id="Filter">
        <div className="columns">
          <div className="column is-2">
            <div className="field">
              <label className="label className">IP:</label>
              <div className="control has-icons-left has-icons-right">
              <div className="select">
              <select >
             {this.state.fields.ips_options.map((ip)=><option key={ip} value={ip}>{ip}</option>) }
              </select>
            </div>
              </div>
            </div>
          </div>
 
          <div className="column is-1">
            <div className="field">
              <label className="label className">Blacklisted:</label>
              <div className="control has-icons-left has-icons-right">
              <div className="select">
              <select>
              {this.state.fields.blacklisted.map((b)=><option key={b} value={b}>{b}</option>) }
              </select>
            </div>
              </div>
            </div>
          </div>
          <div className="column is-2">
            <div className="field">
              <label className="label className">Event type:</label>
              <div className="control has-icons-left has-icons-right">
              <div className="select">
              <select>
              {this.state.fields.events_options.map((e)=><option key={e} value={e}>{e}</option>) }
              </select>
            </div>
              </div>
            </div>
          </div>
       
          </div>
          <div className="columns">
          <div className="column is-4">
            <div className="field">
              <label className="label className">Domain:</label>
              <div className="control has-icons-left has-icons-right">
              <div className="">
              <select multiple>
              {this.state.fields.domains.map((d)=><option key={d} value={d}>{d}</option>) }
              </select>
            </div>
              </div>
            </div>
          </div>
          </div>
          <div className="columns">
          <div className="column is-3">
            <div className="field">
              <label className="label className">from:</label>
              <div className="control has-icons-left has-icons-right">
                <input className="input className" type="datetime-local"/>
                <span className="icon is-left">
                  <i className="fas fa-envelope fa-sm"></i>
                </span>

              </div>
            </div>
          </div>
          <div className="column is-3">
            <div className="field">
              <label className="label className">to:</label>
              <div className="control has-icons-left has-icons-right">
                <input className="input className" type="datetime-local"/>
                <span className="icon is-left">
                  <i className="fas fa-envelope fa-sm"></i>
                </span>

              </div>
            </div>
          </div>
          </div>
         
          <div className="columns">
          <div className="column">
            <div className="field">
              <label className="label className">Action:</label>
              <div className="control has-icons-left has-icons-right">
              <button className="button is-info">Apply</button>
             </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
