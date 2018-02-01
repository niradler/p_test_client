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

const getTopIp = (data) => {
    const ips = [],
        org_data = [];
    let max = 0;
    data = data.filter((e) => e.event_type === 'page_view');
    data.forEach((e) => {
        let loc = ips.indexOf(e.ip);
        if (loc === -1) {
            ips.push(e.ip)
            org_data.push({ip: e.ip, page_view: 1})
        } else {
            org_data[loc].page_view++;
            if (org_data[loc].page_view > max) 
                max = org_data[loc].page_view;
        }
    })

    const top10 = []
        let c_max = max - 1,
            i = 0;
        while (top10.length < 10) {
            if (org_data[i].page_view > c_max) 
                top10.push(org_data[i]);
            i++;
            
            if (i === org_data.length) 
                i = 0;
                c_max--;
            }
        return top10;
    }
    export {fetchData, getFields, getTopIp};