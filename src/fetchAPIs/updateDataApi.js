import * as ipJsonServer from './ipServer'
export default function updateDataApi(data) {
    console.log("ipJson server :::: ", ipJsonServer.localhost1)
      return new Promise((resolve, reject) => {       
        const url = ipJsonServer.localhost1+data.id;
        fetch(url, {
          method: 'PUT',
          headers: {"Content-type": "application/json"},
          body: JSON.stringify({content: data.content})
        })
          .then((response) => response.json())
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            console.log('error', error)
            reject(error);
          });
      });
    }  