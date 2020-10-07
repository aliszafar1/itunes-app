const BASE_URL = '';
const PROXY_SERVER_URL = 'https://cors-anywhere.herokuapp.com/';
const NumberOfAPICallRetryAttempt = 2;
const APITimeoutDuration = 14e3; // In milliseconds

const AppConfig = {BASE_URL, NumberOfAPICallRetryAttempt, APITimeoutDuration, PROXY_SERVER_URL};

export default AppConfig;