import styled from 'styled-components'


export const Container = styled.div`
  grid-area: settings;
  display: flex;
  flex-direction: column;
  gap: .5rem 0;
  padding: 2rem 1rem;
  box-shadow: 5px 5px 15px 5px #A4A4A4;
  border-radius: 6px;
  filter: ${props => props.modalOpen? 'blur(5px)' : 'blur(0px)'};`
Container.displayName = 'SettingsContainer'

export const Title = styled.h1`
  font-size: 2rem;
  grid-area: header;
  text-align: center;`
Title.displayName = 'Title'

export const SettingsOption = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 .5rem;`
SettingsOption.displayName = 'SettingsOption'

export const Property = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  margin-right: 1rem;
  width: 6rem;`
Property.displayName = 'Property'

export const Value = styled.p`
  font-size: 1.3rem;
  justify-self: start;`
Value.displayName = 'Value'

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

