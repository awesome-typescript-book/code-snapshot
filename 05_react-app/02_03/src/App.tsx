import { Text } from './libs/Text'
import { Heading } from './libs/Heading'
import { Button } from './libs/Button'

export const App = () => {
  return (
    <>
      <Text text="true" />
      <Heading tag="h1">見出し</Heading>
      <Heading tag="h1">
        <span>hello, world!</span>
      </Heading>
      <Button onClick={() => console.log('clicked!')} title="Button" type="primary" width={96} />
      <Button onClick={() => console.warn('clicked!')} title="Button" type="secondary" />
      <Button onClick={() => console.error('clicked!')} title="Button" type="error" />
    </>
  )
}
