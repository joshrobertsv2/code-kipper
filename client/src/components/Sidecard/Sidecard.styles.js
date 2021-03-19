import styled from 'styled-components'

export const Container = styled.div`
  grid-area: sidecard;
  filter: ${props => props.modalOpen? 'blur(5px)': 'blur(0px)'};`
Container.displayName = 'Sidecard'