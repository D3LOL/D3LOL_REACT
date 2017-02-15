import axios from 'axios';

var searchUser = (query) => {
  axios.get('/api/search', { params: { username: query } })
      .then(res => {
      	console.log(res)
        return res;
      })
      .catch(err => {
        console.error(err);
      })
};

export default searchUser;
