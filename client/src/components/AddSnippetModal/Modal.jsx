import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Button, Switch, FormControlLabel, TextField, Chip, Select, InputLabel, MenuItem } from '@material-ui/core'
import { Container, TextArea, Code, Pre, TagsContainer } from './Modal.styles'
import Prism from 'prismjs'
import "prismjs/themes/prism-tomorrow.css"
import languagesObj from '../../utils/supportedLanguages'


//snippet, tags, description, private, language
const Modal = ({ isOpen }) => {
  const [snippet, changeSnippet] = useState({
    tags: [], 
    private: true, 
    language: 'javascript', 
    description: '',
    text: "const snippet = 'Insert text here'"
  })
  const [tagText, setTagText] = useState('')


  const handleInput = async (e) => {
    await changeSnippet({...snippet, text: e.target.value})
    Prism.highlightAll()
  }

  const handleTagInput = async(e) => {
    await setTagText(e?.target.value || e.value)

    if(e.target.value.includes(',') || e.target.value.includes(' ')) {
      const newTag = tagText.slice(0, tagText.length)
      const tagsArray = snippet.tags
      tagsArray.push(newTag)

      await changeSnippet({tags: tagsArray})

      setTagText('')
      e.target.value = ''
    }
      
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }



  /* TODO: FIGURE OUT WHY TAGS ARE DELETING LATE */
  const handleDelete = async (idx) => {
    let newTags = snippet.tags
    newTags.splice(idx, 1)
    await changeSnippet({tags: newTags})
  }

  return isOpen ?  
  ReactDOM.createPortal(
    <Container onSubmit={handleSubmit}>

      {/* eslint-disable-next-line */}
      <InputLabel id="language">Language</InputLabel>
      <Select labelId="language" value={snippet.language}>
        {Object.keys(languagesObj).map((el, idx) => (
          <MenuItem key={idx} value={el} onClick={() => changeSnippet({...snippet, language: el})}> {el} </MenuItem>
        ))}
      </Select>

      <TextArea onChange={handleInput} 
        placeholder="const snippet = 'Insert text here'"
        rows="5" 
        cols="70" wrap="soft"/>
      

     <Pre>
       <Code className={`language-${languagesObj[snippet.language]}`}>
         {snippet.text}
       </Code>
     </Pre>

      <FormControlLabel
        control={<TextArea aria-label="minimum height" 
        rows={6} cols={60} resize="false" 
        placeholder="Minimum 3 rows" margin="1rem"
        onChange={(e) => changeSnippet({...snippet, description: e.target.value})} 
        />}
        label="Description"
        labelPlacement="top"
      />
      

      <FormControlLabel
        control={<Switch checked={snippet.privacy} onChange={() => changeSnippet({privacy: !snippet.privacy})} name="checkedA" />}
        label={snippet.privacy? 'Public': 'Private'}
      />


    <FormControlLabel 
    control={<TextField id="outlined-basic" className="tag-input" variant="outlined" onChange={handleTagInput}/>}
    label="Tags"
    labelPlacement="top"
    />
     

    <TagsContainer>
      {snippet?.tags?.length > 0 ? snippet.tags.map((tag, idx) => (
        <Chip variant="outlined" key={idx} color="primary"
        onDelete={() => handleDelete(idx)}
        label={tag}/>
      )) : null}
    </TagsContainer>

 
      <Button variant="contained" color="primary" disableElevation>Submit</Button>
    </Container>
  , document.querySelector('#portal')
  )
  : null
}

export default Modal
