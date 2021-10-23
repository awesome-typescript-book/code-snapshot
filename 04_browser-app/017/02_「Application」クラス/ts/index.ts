class Application {
  start() {
    console.log('hello world')
  }
}

window.addEventListener('load', () => {
  const app = new Application()
  app.start()
})
