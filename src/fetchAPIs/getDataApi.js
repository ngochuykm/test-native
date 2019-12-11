import * as ipJsonServer from './ipServer'
export default function getDataApi() {

    return new Promise((resolve, reject) => {
      
      const url = ipJsonServer.localhost1
      fetch(url, {
        method: "GET"
      })
        .then((response) => response.json())
        .then((res) => {
          console.log('res', res)
          resolve(res);
        })
        .catch((error) => {
          console.log('error', error)
          reject(error);
        });
    });
  }