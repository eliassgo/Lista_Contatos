import styled from 'styled-components'

export const MainContainer = styled.div`
  margin-top: 30px;
  height: 50vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none; /* Para navegadores baseados no motor WebKit (Chrome, Safari, etc.) */
  }
`
