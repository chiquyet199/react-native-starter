import lang from 'lang'

export default {
  fetchData: () =>
    new Promise(resolve => {
      setTimeout(() => resolve({ greetText: lang.greetText }), 2000)
    }),
}
