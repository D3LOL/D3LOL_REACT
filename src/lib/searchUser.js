import axios from 'axios';

var searchUser = (query) => {
  axios.get('/search', { params: { keyword: query } })
      .then(res => {
        return res;
      })
      .catch(err => {
        console.error(err);
      })
};

export default searchUser;
