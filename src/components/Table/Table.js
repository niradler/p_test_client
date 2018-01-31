import React, {Component} from 'react';

class Table extends Component {
    constructor(props) {
        super();
        this.state = {
            thead: [],
            data: [],
            pagination:{},
            pageSize:10
        }
    }
    componentWillMount() {
        const thead = this.props.table_head || [],
        data = this.props.data || [],
        pagination={
            start:0,
            end:this.state.pageSize,
            pages:Math.ceil(data.length/this.state.pageSize),
            cpage:1
        };
       this.setState({thead, data, pagination});
    }
    next = ()=>{
        const state = this.state;
        state.pagination.start = state.pagination.start + state.pageSize;
        state.pagination.end = state.pagination.end + state.pageSize;
        state.pagination.cpage = Math.ceil(this.state.pagination.end/this.state.pageSize);
        this.setState(state);
    }
    previous = ()=>{
        const state = this.state;
        state.pagination.start = state.pagination.start - state.pageSize;
        state.pagination.end = state.pagination.end - state.pageSize;
            state.pagination.cpage = Math.ceil(this.state.pagination.end/this.state.pageSize);
        
        this.setState(state);
    }
    render() {
        return (
            <div id="data-table">
                <div id="table">
                    <table className="table is-hoverable">
                    {this.state.thead.length >0? 
                        <thead>
                            <tr>
                                <th></th>
                                {this.state.thead.map((label)=><th key={label}>{label}</th>)}
                            </tr>
                        </thead>
                        :""}
                        {this.state.data.length >0? 
                        <tbody>
                            {this.state.data.map((event,i)=>{
                                if (i>=this.state.pagination.start && i<this.state.pagination.end) 
                                return(
                                <tr key={i}>
                                <td>{(i+1)}</td>
                                    <td>{event.ip}</td>
                                    <td>{event.timestamp}</td>
                                    <td>{event.domain}</td>
                                    <td>{event.blacklisted ?"true":"false"}</td>
                                    <td>{event.event_type}</td>
                                </tr>
                            )})}
                            
                        </tbody>
                        :<tbody></tbody>}
                    </table>
                </div>
                <div id="pagination">
                    <div
                        className="pagination is-centered"
                        role="navigation"
                        aria-label="pagination">
                        <a className="pagination-previous" onClick={this.previous} disabled={this.state.pagination.cpage === 1}>Previous</a>
                        <a className="pagination-next" onClick={this.next} disabled={this.state.pagination.cpage === this.state.pagination.pages}>Next</a>
                        <ul className="pagination-list">
                            <li>
                                <a className="pagination-link" aria-label="page">{this.state.pagination.cpage}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Table;
