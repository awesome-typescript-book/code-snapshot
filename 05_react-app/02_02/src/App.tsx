import { Text } from './libs/Text'
import { Heading } from './libs/Heading'

export const App = () => {
  return (
    <>
      <Text text="true" />
      <Heading tag="h1">見出し</Heading>
      <Heading tag="h1">
        <span>hello, world!</span>
      </Heading>
    </>
  )
}
