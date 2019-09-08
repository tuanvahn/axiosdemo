import axios from 'axios';

const BASE_URL = 'http://5d6f4fd4482b530014d2e00c.mockapi.io/api/quanlysach/users';

const getTodos = async () => {
  try {
    const res = await axios.get(`${BASE_URL}`);

    const todos = res.data;

    console.log(`GET: Here's the list of todos`, todos);

    return todos;
  } catch (e) {
    console.error(e);
  }
};