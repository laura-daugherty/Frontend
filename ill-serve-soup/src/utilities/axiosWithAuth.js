import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    headers: {
      //'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization':  `Bearer ${token}`
    },
  })
}

export default axiosWithAuth;