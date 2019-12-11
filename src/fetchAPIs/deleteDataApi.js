import * as ipJsonServer from './ipServer'
export default function deleteDataApi(data) {

    return new Promise((resolve, reject) => {
      
      const url = ipJsonServer.localhost1+data
      fetch(url, {
        method: "DELETE"
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
