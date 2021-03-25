import styled from 'styled-components'

export const extraStyles = {
  interests: {
    display: 'flex', 
    flexDirection: 'column', 
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  }, 
}


export const materialStyles = {
  cancel: {
    alignSelf: 'flex-end',
  },
  edit: {
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
    color: 'white',
  }, 
  cancelChanges: {
    background: 'gray', 
    color: 'white', 
    padding: '1rem',
    width: '30%',
    display: 'flex',
    margin: 'auto',
  },
  saveChanges: {
    background: 'green', 
    color: 'white',
    padding: '1rem', 
    width: '30%',
    display: 'flex',
    margin: 'auto',
  }, 
  chip: {
    margin: '.3rem',
    fontSize: '1.2rem', 
    padding: '.3rem'
  }
}

export const Container = styled.form`
  display: flex;
  border-radius: 6px;
  flex-direction: column;
  gap: 2rem 0;
  height: 750px;
  width: 60%;
  max-width: 800px;
  background: #141732;
  position: fixed; 
  padding: 3rem 2rem;
  box-sizing: border-box;
  top: 25%;
  left: 26%;
  font-family: Lato;
  overflow-y: scroll;
  color: white;
  font-size: 1.4rem;`
Container.displayName = 'Container'

export const InputContainer = styled.div`
  display: flex;
  padding: 0 1rem;
  justify-content: flex-start;`
InputContainer.displayName = 'InputContainer'

export const Label = styled.label`
  width: 40%;`
Label.displayName = 'Label'

export const InputField = styled.input`
  width: 40%;
  padding: .8rem 2rem;
  margin: 0 1rem 0 0;
  outline: none;`
InputField.displayName = 'Username'

export const ThemeContainer = styled.div`
  margin: 2rem 0;`
ThemeContainer.displayName = 'ThemeContainer'

export const InterestsContainer = styled.div`
  display: 'flex'; 
  flex-direction: 'column'; 
  flex-wrap: 'wrap';
  justify-content: 'center';
  align-items: 'center';`
InterestsContainer.displayName = 'InterestsContainer'

export const InterestsLabel = styled.label`
  display: inline-flex;
  margin: 3rem 1rem 2rem;`
InterestsLabel.displayName = 'InterestsLabel'

export const InterestsInput = styled.input`
  width: 40%;
  padding: .2rem 2rem;
  margin: 0 1rem 0 0;
  outline: none;
  font-size: 1.4rem;
  display: inline-flex;`
InterestsInput.displayName = 'InterestsInput'
