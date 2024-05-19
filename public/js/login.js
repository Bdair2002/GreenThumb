// import axios from 'axios';
import axios from 'axios';
import { showAlert } from './alerts.js';
export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/GreenThumb/v1/users/login',
      data: { email, password },
    });

    if (res.data.status === 'success') {
      console.log('Logged in');
      window.setTimeout(() => {
        location.assign('/gardens');
      }, 1500);
    }
  } catch (err) {
    console.log('Something went wrong!');
  }
};
export const signup = async (
  username,
  firstname,
  lastname,
  email,
  password,
  passwordconfirm,
) => {
  try {
    console.log(
      username,
      firstname,
      lastname,
      email,
      password,
      passwordconfirm,
    );
    const res = await axios({
      method: 'POST',
      url: '/GreenThumb/v1/users/signup',
      data: { username, firstname, lastname, email, password, passwordconfirm },
    });

    if (res.data.status === 'success') {
      console.log('Logged in');
      window.setTimeout(() => {
        location.assign('/gardens');
      }, 1500);
    }
  } catch (err) {
    console.log('Something went wrong!');
    showAlert('error', 'Error signing! Try again.');
  }
};
