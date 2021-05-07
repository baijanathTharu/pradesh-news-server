const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://ekantipur.com',
});

const getEkantipur = async () => {
  try {
    const site = await instance.get('/');

    return site.data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getEkantipur;
