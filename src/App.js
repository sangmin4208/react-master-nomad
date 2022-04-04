import styled, { keyframes } from 'styled-components'

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0;
  }
  50%{
    transform: rotate(360deg);
    border-radius: 50%;
  }
  100% {
    transform: rotate(0deg);
    border-radius: 0;
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Emoji = styled.span`
  font-size: 40px;
`

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: tomato;
  animation: ${rotationAnimation} 2s linear infinite;

  display: flex;
  justify-content: center;
  align-items: center;

  /* span {
    font-size: 40px;
    transition: 1s;
    &:hover {
      transform: scale(1.5);
    }
    &:active {
      opacity: 0;
    }
  } */

  ${Emoji} {
    transition: 1s;
    &:hover {
      transform: scale(1.5);
    }
    &:active {
      opacity: 0;
    }
  }
`

function App() {
  return (
    <Wrapper as="main">
      <Box>
        {/* <span>😇</span> */}
        <Emoji>😎</Emoji>
      </Box>
    </Wrapper>
  )
}

export default App
