import axios from 'axios'
const data_src = "https://storage.googleapis.com/pxtask-eng/dummy_data.json";

const fetchData = async(filter) => {
    try {
        const res = await axios.post('https://perimeterx.herokuapp.com/data/fetch', {
            "urls": [data_src],
            "filter": filter
        });
        return res.data;
    } catch (error) {
        return error;
    }
}

const getFields = (data) => {
    const ips_options = [],
        domains = [],
        blacklisted = [],
        events_options = [];
    data.forEach(event => {
        if (!ips_options.includes(event.ip)) 
            ips_options.push(event.ip)
        if (!domains.includes(event.domain)) 
            domains.push(event.domain)
        if (!blacklisted.includes(event.blacklisted.toString())) 
            blacklisted.push(event.blacklisted.toString())
        if (!events_options.includes(event.event_type)) 
            events_options.push(event.event_type)
    });
    return {ips_options, domains, blacklisted, events_options}
}

export {fetchData, getFields};