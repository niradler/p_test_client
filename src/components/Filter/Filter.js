import React, {Component} from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class Filter extends Component {
  constructor(props) {
    super();
    this.state = {
      show:false,
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
  onChange = (evt)=>{
    const state = this.state;
    if (evt !==null && evt.target !== undefined) {
      state.form[evt.target.name] = evt.target.value
      this.setState(state)
    }
  }
  handleSelect =(field,data)=>{
    const state = this.state;
    if(field  === 'blacklisted') data.value = (data.value === 'true');
    if(typeof data === 'object' && data.length) state.form[field] = data;
    else state.form[field] = data.value;
    
    this.setState(state)
  }
reset = ()=>{
  this.props.apply();
}
  apply = (e)=>{
    e.preventDefault();
    let form = this.state.form
    for (const key in form) {
      if(form[key]==='none'){
        delete form[key];
      }
    }
    if (form.domain) form.domain = form.domain.map((d)=>d.value)
 
    this.props.apply(form)
  }
  render() {
    return (
      <div id="Filter">
      <div class="card">
        {this.state.show ?
  <div class="card-content">

        <div className="columns">
          <div className="column is-3">
            <div className="field">
              <label className="label className">IP:</label>
              <div className="control has-icons-left has-icons-right">
              <Select
                name="ip"
                value={this.state.form.ip}
                onChange={(data)=>this.handleSelect('ip',data)}
                options={this.state.fields.ips_options.map((i)=> {return { value: i, label: i }})}
              />
              </div>
            </div>
          </div>
 
          <div className="column is-2">
            <div className="field">
              <label className="label className">Blacklisted:</label>
              <div className="control has-icons-left has-icons-right">
              <Select
              name="blacklisted"
              value={this.state.form.blacklisted}
              onChange={(data)=>this.handleSelect('blacklisted',data)}
              options={this.state.fields.blacklisted.map((i)=> {return { value: i, label: i }})}
            />
              </div>
            </div>
          </div>
          <div className="column is-3">
            <div className="field">
              <label className="label className">Event type:</label>
              <div className="control has-icons-left has-icons-right">
              <Select
              name="event_type"
              value={this.state.form.event_type}
              onChange={(data)=>this.handleSelect('event_type',data)}
              options={this.state.fields.events_options.map((i)=> {return { value: i, label: i }})}
            />
              </div>
            </div>
          </div>
       
          </div>
          <div className="columns">
          <div className="column is-6">
            <div className="field">
              <label className="label className">Domain:</label>
              <div className="control has-icons-left has-icons-right">
              <Select
              multi
              name="domain"
              value={this.state.form.domain}
              onChange={(data)=>this.handleSelect('domain',data)}
              options={this.state.fields.domains.map((ip)=> {return { value: ip, label: ip }})}
            />
              </div>
            </div>
          </div>
          </div>
          <div className="columns">
          <div className="column is-5">
            <div className="field">
              <label className="label className">from:</label>
              <div className="control has-icons-left has-icons-right">
                <input className="input className" type="datetime-local" name="from" onChange={this.onChange}/>
                <span className="icon is-left">
                  <i className="fas fa-envelope fa-sm"></i>
                </span>

              </div>
            </div>
          </div>
          <div className="column is-5">
            <div className="field">
              <label className="label className">to:</label>
              <div className="control has-icons-left has-icons-right">
                <input className="input className" type="datetime-local" name="to" onChange={this.onChange}/>
                <span className="icon is-left">
                  <i className="fas fa-envelope fa-sm"></i>
                </span>

              </div>
            </div>
          </div>
          </div>
         
          <div className="columns is-mobile">
          
          <div className="column is-1-desktop is-3-mobile ">
          <div className="control ">
          <button className="button is-info" onClick={this.apply}>Apply</button>
         </div>
         </div>
         <div className="column is-1-desktop is-3-mobile">
          <div className="control ">
          <button className="button is-danger" onClick={this.reset}>Reset</button>
         </div>
         </div>
         <div className="column is-1-desktop is-3-mobile">
         <div className="control ">
          <button className="button is-warning" onClick={()=>this.setState({show:false})}>Hide</button>
         </div>
        </div>

        </div>

        </div>
        : <button className="button is-link is-outlined is-fullwidth" onClick={()=>this.setState({show:true})}>Show Filter</button>}
</div>
      </div>
    );
  }
}

export default Filter;
