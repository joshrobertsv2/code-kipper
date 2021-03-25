import styled from 'styled-components'

export const Container = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  gap: .5rem 0;
  padding: 2rem 1rem;
  border-radius: 6px;
  filter: ${props => props.modalOpen? 'blur(5px)' : 'blur(0px)'};`
Container.displayName = 'SettingsContainer'

export const SettingsOptions = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 .5rem;
  gap: 2rem;
  margin: 0 0 10rem;`
SettingsOptions.displayName = 'SettingsOptions'

export const Property = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  margin-right: 1rem;
  width: 6rem;
  display: inline;`
Property.displayName = 'Property'

export const Value = styled.p`
  display: inline;
  font-size: 1.3rem;
  justify-self: start;`
Value.displayName = 'Value'

export const ThemeContainer = styled.div`
  display: inline-flex;
  flex-direction: column;`
ThemeContainer.displayName = 'ThemeContainer'


export const EditButton = styled.button`
  padding: 1rem 2rem;
  background: gray;
  color: white;
  border: none;
  width: 33%;
  align-self:center;
  display: inline;
  font-size: 1.2rem;
  border-radius: 6px;
  outline: none;`
EditButton.displayName = 'EditButton'

export const DeleteAccount = styled.button`
  padding: 1rem 2rem;
  background: darkred;
  color: white;
  border: none;
  width: 33%;
  align-self:center;
  display: inline;
  font-size: 1.2rem;
  border-radius: 6px;
  outline: none;`
DeleteAccount.displayName = 'DeleteAccount' 

