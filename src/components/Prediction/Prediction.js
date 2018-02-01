import React, {Component} from 'react';
import {BarChart, Bar,XAxis,YAxis,Legend,CartesianGrid,Tooltip} from 'recharts';


class Prediction extends Component {
    render() {
        return (
          <BarChart width={900} height={600} data={this.props.data}>
          <XAxis dataKey="ip"  />
          <YAxis />
          <Tooltip wrapperStyle={{ width: 120, backgroundColor: '#ccc' }} />
            <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />

          <Bar type="monotone" dataKey="page_view" barSize={30} fill="#8884d8"/>
        </BarChart>
        )
    }

}
export default Prediction;