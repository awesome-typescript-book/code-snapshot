const printLine = (text: string, breakLine: boolean = true) => {
  process.stdout.write(text + (breakLine ? '\n' : ''))
}

const promptInput = async (text: string) => {
  printLine(`\n${text}\n> `, false)
  const input: string = await new Promise((resolve) => process.stdin.once('data', (data) => resolve(data.toString())))
  return input.trim()
}

class HitAndBlow {
  answerSource: string[]
  answer: string[]
  tryCount: number

  constructor() {
    this.answerSource = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    this.answer = []
    this.tryCount = 0
  }
}

;(async () => {
  const hitAndBlow = new HitAndBlow()
})()
