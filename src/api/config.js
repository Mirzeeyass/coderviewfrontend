let baseURL = 'abdcoderview.herokuapp.com';
let httpPrefix = 'https://';
let wsPrefix = 'wss://';
if (process.env.NODE_ENV === 'development') {
  baseURL = 'abdcoderview.herokuapp.com';
  httpPrefix = 'http://';
  wsPrefix = 'ws://';
}

export default {
  http: {
    baseURL: `${httpPrefix}${baseURL}/api`,
  },
  ws: {
    baseURL: `${wsPrefix}${baseURL}/ws`,
  },
};
