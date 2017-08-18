import 'whatwg-fetch';

const baseURL = 'https://api.dev.qlfs.io';
const authoriseURL = '/my/v2/auth/authorise?level=1&method=pwd&deviceId=1';
const submitOTPURL = '/my/v2/auth/mfa?method=sms&state={{needleAuthState}}';
let callbackURL = '';

const getCallbackUrl = () => {
  // fetch(`${baseURL}${authoriseURL}`)
  fetch('/mocks/authorise.json')
    .then(response => response.json())
    .then(response => {
      callbackURL = response.callback_url;
    });
};

const submitQFF = (qff, surname, pin, cb) => {
  const data = {
    answers: [
      { id: 1, answer: qff },
      { id: 2, answer: surname },
      { id: 3, answer: pin },
    ],
  };
  // fetch(`${baseURL}${callbackURL}`, {
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   method: 'POST',
  //   body: JSON.stringify(data),
  // })
  fetch('/mocks/auth-success.json')
    .then(response => response.json())
    .then(response => {
      cb(response);
    });
};

const submitOTP = (otp, cb) => {
  const data = {
    answers: [
      {
        id: 4,
        answer: otp,
      },
    ],
  };
  // fetch(`${baseURL}${submitOTPURL}`, {
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   method: 'POST',
  //   body: JSON.stringify(data),
  // })
  fetch('/mocks/otp-success.json')
    // fetch('/mocks/otp-failed.json')
    .then(response => response.json())
    .then(response => {
      cb(response);
    });
};

export { getCallbackUrl, submitQFF, submitOTP };
