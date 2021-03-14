import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Button, Switch, FormControlLabel, TextareaAutosize, TextField, Chip } from '@material-ui/core'
import { Container, TextArea, Code, Pre, TagsContainer } from './Modal.styles'
import Prism from 'prismjs'
import "prismjs/themes/prism-tomorrow.css";


//snippet, tags, description, private, language
const Modal = ({ isOpen }) => {
  const [snippet, changeSnippet] = useState("const snippet = 'Insert text here'")

  const [tags, changeTags] = useState([])
  const [tagText, setTagText] = useState('')
  const [privacy, setPrivacy] = useState(false)

  const handleInput = async (e) => {
    await changeSnippet(e.target.value)
    Prism.highlightAll()
  }

  const handleTagInput = async(e) => {
    await setTagText(e.target.value)

    if(e.target.value.includes(',') || e.target.value.includes(' ')) {
      const comma = tagText.length
      console.log(tagText)

      await changeTags(prevTags => [tagText.slice(0, comma), ...prevTags])

      setTagText('')
      e.target.value = ''
      console.log(tags)
    }
      
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  /* TODO: FIGURE OUT WHY TAGS ARE DELETING LATE */
  const handleDelete = (idx) => {
    let newTags = tags
    newTags.splice(idx, 1)
    changeTags(newTags)
    console.log(tags)
  }

  return isOpen ?  
  ReactDOM.createPortal(
    <Container onSubmit={handleSubmit}>

      <FormControlLabel
        control={<TextareaAutosize aria-label="minimum height" rowsMin={5} cols={60} placeholder="Minimum 3 rows" />}
        label="Description"
        labelPlacement="top"
      />

      <FormControlLabel
        control={<Switch checked={privacy} onChange={() => setPrivacy(!privacy)} name="checkedA" />}
        label={privacy? 'Public': 'Private'}
      />

      <FormControlLabel 
        control={<TextArea onChange={handleInput} 
        placeholder="const snippet = 'Insert text here'"
        rows="5" 
        cols="70" wrap="soft"/>}
        label="Code Snippet"
        labelPlacement="top"/>
      

     <Pre>
       <Code className={`language-javascript`} >
        {snippet}
       </Code>
     </Pre>

     <TextField id="outlined-basic" variant="outlined" onChange={handleTagInput}/>

    <TagsContainer>
      {tags.map((tag, idx) => (
        <Chip variant="outlined" key={idx} color="primary"
        onDelete={() => handleDelete(idx)}
        label={tag}/>
      ))}
    </TagsContainer>

 
      <Button variant="contained" color="primary" disableElevation>Submit</Button>
    </Container>
  , document.querySelector('#portal')
  )
  : null
}

export default Modal
