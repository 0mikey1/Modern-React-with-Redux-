import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID wWIabL7mWh_GYgHZ8ftAqKjc4ejbLDt_sGynjTCVM9E'
  }
});
