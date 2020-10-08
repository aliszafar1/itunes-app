const BASE_URL = 'https://itunes.apple.com/';
const NumberOfAPICallRetryAttempt = 2;
const APITimeoutDuration = 14e3; // In milliseconds

const AppConfig = {BASE_URL, NumberOfAPICallRetryAttempt, APITimeoutDuration};

export default AppConfig;