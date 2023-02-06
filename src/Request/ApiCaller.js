import axios from "axios";

const headerGenerator = () => {

    let headers = [];

    let headerList = [
        {key: 'Content-Type',value: 'application/json'}
        // {key: 'Authorization',value: 'Tokjakshdfjklashdfjklasdhfjklashden'}
      ];

    headers = headerList.map( (item) => {
        return (
          `${item.key} : ${item.value},`
        );
      });

    return headers;
}

export function axiosRequest (url,method) {
    return axios.request({
        url: url,
        method: method,
        baseURL: "127.0.0.1:8000",
        // responseType: 'json'
        // headers: headerGenerator
    });
}