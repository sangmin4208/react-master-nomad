import styled from 'styled-components'
const Father = styled.div`
  display: flex;
`

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor || 'pink'};
`

const Circle = styled(Box)`
  border-radius: 50%;
`

function App() {
  return (
    <Father>
      <Box />
      <Box bgColor="teal" />
      <Box bgColor="tomato" />
      <Circle />
      <Circle bgColor="purple" />
    </Father>
  )
}

export default App
