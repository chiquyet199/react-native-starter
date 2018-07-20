import axios from 'axios'
import lang from 'lang'

const { get, post } = axios

export default {
  get,
  post,
  fetchData: () =>
    new Promise(resolve => {
      setTimeout(() => resolve({ greetText: lang.greetText }), 2000)
    }),
}
