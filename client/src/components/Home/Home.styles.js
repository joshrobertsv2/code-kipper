import styled from 'styled-components'

export const Container = styled.div`
  grid-area: home;
  border: 1px solid green;`
Container.displayName = 'Container'


export const Title = styled.h1`
  font-size: 2rem;
  grid-area: header;
  text-align: center;`
Title.displayName = 'Title'


export const Sidecard = styled.div`
  grid-area: sidecard;
  border: 1px solid blue;`
Sidecard.displayName = 'Sidecard'
