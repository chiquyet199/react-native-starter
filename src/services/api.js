export default {
  fetchData: () =>
    new Promise(resolve => {
      setTimeout(() => resolve({ greetText: 'Hello from React Native Starter' }), 2000)
    }),
}
