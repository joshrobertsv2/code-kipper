import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Switch, Chip, Button, FormControlLabel, InputLabel, Select, MenuItem, FormControl } from '@material-ui/core'
import { Container, TextArea, Code, Pre, TagsContainer, Label, Input } from './Modal.styles'
import Prism from 'prismjs'
import "prismjs/themes/prism-tomorrow.css"
import languagesObj from '../../utils/supportedLanguages'
import axios from 'axios'


//snippet, tags, description, private, language
const Modal = ({ isOpen, changeIsOpen }) => {
  const [tagText, setTagText] = useState('')
  const [snippet, changeSnippet] = useState({
    user_id: '604acd00433005638077804a',
    tags: [], 
    private: true, 
    language: 'javascript', 
    description: '',
    text: "const snippet = 'Insert text here'"
  })
  

  const handleInput = async (e) => {
    await changeSnippet({...snippet, text: e.target.value})
    Prism.highlightAll()
  }

  const handleTagInput = async(e) => {
    await setTagText(e?.target.value || e.value)

    if(e.target.value.includes(',') || e.target.value.includes(' ')) {
      const newTagText = tagText.slice(0, tagText.length)

      const tagsArray = snippet.tags
      tagsArray.push(newTagText)

      await changeSnippet({...snippet, tags: tagsArray})

      setTagText('')
      e.target.value = ''
    }
      
  }

  const handleBadSubmit = (e) => {
    e.preventDefault()
  }

  const selectLanguage = async (e) => {
    changeSnippet({...snippet, language: e.target.value})
  }

  const changePrivacy = () => {
    changeSnippet({...snippet, private: !snippet.private})
  }

  const deleteTag = async (idx) => {
    let newTags = snippet.tags
    newTags.splice(idx, 1)
    await changeSnippet({...snippet, tags: newTags})
  }

  const createSnippet = async (e) => {
    e.preventDefault()
    console.log(snippet)

    axios.post('/kipper', snippet)
    changeIsOpen(false)
  }

  return isOpen ?  
  ReactDOM.createPortal(
    <Container onSubmit={handleBadSubmit}>
      
      {/* Select Language */}
      <FormControl  >
        <InputLabel id="language" >Language</InputLabel>
          <Select labelId="language" value={snippet.language} onChange={selectLanguage}>
            {Object.keys(languagesObj).map((language, idx) => (
              <MenuItem key={idx} value={language}>
                {language}
              </MenuItem>
            ))}
          </Select>
      </FormControl>



      {/* code snippet */}
      <Label htmlFor="code-snippet">Copy code here: </Label>
      <TextArea 
        id="code-snippet"
        onChange={handleInput} 
        placeholder="const snippet = 'Insert text here'"
        rows="5" cols="70" wrap="soft"
        />

      <Pre>
       <Code className={`language-${languagesObj[snippet.language]}`}>
         {snippet.text}
       </Code>
     </Pre>

      {/* description*/}
      <Label htmlFor="description">Description </Label>
      <TextArea 
        id="description"
        rows={6} cols={60} resize="false" 
        placeholder="Minimum 3 rows" margin="1rem"
        onChange={(e) => changeSnippet({...snippet, description: e.target.value})} 
        />

      <FormControlLabel
        control={<Switch checked={snippet.private} onChange={changePrivacy}  />}
        label={snippet.private? 'Public': 'Private'}
      />



      <Label htmlFor="tags">Tags</Label>
      <Input id="tags" onChange={handleTagInput}/>
        
      <TagsContainer>
      {snippet.tags.map((tag, idx) => (
        <Chip variant="outlined" key={idx} color="primary"
        onDelete={() => deleteTag(idx)}
        label={tag}/>
      ))}
    </TagsContainer>

    <Button variant="contained" color="primary" disableElevation onClick={createSnippet}>Submit</Button>
    </Container>
  , document.querySelector('#portal')
  )
  : null
}

export default Modal
