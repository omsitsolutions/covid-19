import axios from 'axios';

//TYPES
export const FETCH_GLOBAL = "FETCH_GLOBAL_REQUEST";
export const FETCH_INDIA = "FETCH_INDIA_REQUEST";
export const FETCH_ASSAM = "FETCH_ASSAM_REQUEST";
export const LOADING = "LOADING";
export const ERROR = "error";

const ROOT_API = "https://api.covid19api.com";
const INDIA_API = "https://api.covid19india.org/state_district_wise.json";

export const setLoading = (value) => {
    return dispatch=>{
        dispatch({type:LOADING,payload:value})
    }
}

export const setError=(err)=>{
    return dispatch=>{
        dispatch({type:ERROR,payload:err})
    }
}

export const fetchGlobal = () => {
    // console.log("fetching")
    return dispatch => {
        dispatch({type: LOADING,payload:true})
        axios.get(ROOT_API + "/summary")
            .then(res => {
                dispatch({type: FETCH_GLOBAL, payload: res.data})
            })
            .catch(err => {
                console.log("error ",err)
                dispatch({type: ERROR, payload: "Something went wrong"})
            })
            .finally(()=>{
                dispatch({type:LOADING,payload:false})
            })
    }
}

export const fetchIndia = () => {
    return dispatch => {
        dispatch({type: LOADING,payload:true})
        axios.get(INDIA_API)
            .then(res => {
                const data = Object.keys(res.data).map(state => {

                    let confirmed = Object.keys(res.data[state].districtData).reduce((acc, b) => acc + res.data[state].districtData[b].confirmed, 0);
                    let deaths = Object.keys(res.data[state].districtData).reduce((a, b) => a + res.data[state].districtData[b].deceased, 0)
                    let recovered = Object.keys(res.data[state].districtData).reduce((a, b) => a + res.data[state].districtData[b].recovered, 0)
                    let districts = Object.keys(res.data[state].districtData).map(d => ({
                        name: d.toString(),
                        ...res.data[state].districtData[d]
                    }));

                    return {
                        state: state.toString(),
                        confirmed,
                        deaths,
                        recovered,
                        districts
                    }
                })
                let confirmed = 0;
                let deaths = 0;
                let recovered = 0;
                data.forEach(item => {
                    confirmed += item.confirmed;
                    deaths += item.deaths;
                    recovered += item.recovered;
                })
                let summary = {
                    confirmed,
                    deaths,
                    recovered
                }
                dispatch({type: FETCH_INDIA, payload: {data, summary}})
            })
            .catch(err => {
                console.error(err)
                dispatch({type: ERROR, payload: "Something went wrong"})
            })
            .finally(()=>{
                dispatch({type:LOADING,payload:false})
            })
    }
}

export const fetchAssam = () => {
    return dispatch => {
        dispatch({type: LOADING,payload:true})
        axios.get(INDIA_API)
            .then(res => {
              console.log('Testing log feature in React');
              console.log(res.data);
              console.log(res.data.Assam);
              console.log(res.data.Assam.districtData);
              console.log(res.data.Assam.districtData.Sonitpur);
              console.log(res.data.Assam.districtData.Sonitpur.confirmed);
              console.log(Object.keys(res.data));
              //const data = Object.keys(res.data.Assam);
                const data = Object.keys(res.data.Assam.districtData).map(function(district)  {

                    let confirmed = res.data.Assam.districtData[district].confirmed;
                    let deaths =  res.data.Assam.districtData[district].deceased;
                    let recovered = res.data.Assam.districtData[district].recovered;
                    console.log(confirmed+'-'+deaths+'-'+recovered);
                    let districts = Object.keys(res.data.Assam.districtData).map(d => ({
                        name: d.toString(),
                        ...res.data.Assam
                    }));

                    return {
                        district: district.toString(),
                        confirmed,
                        deaths,
                        recovered,
                        districts
                    }
                })
                console.log( data);
                let confirmed = 0;
                let deaths = 0;
                let recovered = 0;
                data.forEach(item => {
                    confirmed += item.confirmed;
                    deaths += item.deaths;
                    recovered += item.recovered;
                })
                let summary = {
                    confirmed,
                    deaths,
                    recovered
                }
                dispatch({type: FETCH_ASSAM, payload: {data, summary}})
            })
            .catch(err => {
                console.error(err)
                dispatch({type: ERROR, payload: "Something went wrong"})
            })
            .finally(()=>{
                dispatch({type:LOADING,payload:false})
            })
    }
}
