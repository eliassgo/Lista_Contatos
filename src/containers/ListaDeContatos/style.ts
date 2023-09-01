import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 50vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none; /* Para navegadores baseados no motor WebKit (Chrome, Safari, etc.) */
  }
`
