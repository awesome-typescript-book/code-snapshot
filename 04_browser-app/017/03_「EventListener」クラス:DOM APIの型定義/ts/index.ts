class Application {
  start() {
    const button = document.getElementById('deleteAllDoneTask')

    if (!button) return

    console.log(button)
  }
}

window.addEventListener('load', () => {
  const app = new Application()
  app.start()
})
