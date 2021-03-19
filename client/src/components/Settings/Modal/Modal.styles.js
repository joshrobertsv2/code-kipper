import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  gap: 2rem 0;
  height: 750px;
  width: 60%;
  max-width: 800px;
  background: #25284C;
  position: fixed; 
  padding: 3rem 2rem;
  box-sizing: border-box;
  top: 25%;
  left: 26%;
  font-family: Lato;`
Container.displayName = 'Container'

export const Username = styled.input`
  `
Username.displayName = 'Username'

export const Email = styled.input`
  `
Email.displayName = 'Email'