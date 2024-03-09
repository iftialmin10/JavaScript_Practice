import { async } from 'regenerator-runtime';
import { TIMEOUT_SEC } from './config.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(
          url,

          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(uploadData),
          }
        )
      : fetch(url);

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);

    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};

// export const getJSON = async function (url) {
//   try {
//     const fetchPro = fetch(url);
//     const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);

//     const data = await res.json();

//     if (!res.ok) throw new Error(`${data.message} (${res.status})`);
//     return data;
//   } catch (err) {
//     /*
//     here wew generate new error and throw this error to module to catch
//     error there not here.
//     */
//     throw err;
//   }
// };

// export const sendJSON = async function (url, uploadData) {
//   try {
//     // To send data we also need some method along with url in parameter
//     const fetchPro = fetch(
//       url,

//       {
//         /*
//       To send data we need to be a post request and so besides pasing in
//       the URL we also need to pass in an object of some option.
// */
//         method: 'POST',

//         /* Headers are basically some snippets of text which are like
//       information about the request itself.
//       */
//         headers: {
//           'Content-Type': 'application/json',
//           /*
//           so with this will tell the API, so we specify in the request
//           that the data that we are gonna send is going to be in the
//           JSON format and so only then our API can correctly accept that
//           data and create a new recipe in the database.
//           */
//         },

//         /*
//         Payload of the request: So basically the data that we want to send
//         which is called the body. So the body should be in JSON
//         */
//         body: JSON.stringify(uploadData),
//       }
//     );
//     const res = await Promise.race([fetchPro], timeout(TIMEOUT_SEC));

//     const data = await res.json();

//     if (!res.ok) throw new Error(`${data.message} (${res.status})`);
//     return data;
//   } catch (err) {
//     throw err;
//   }
// };
