import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Switch, Chip, Button, FormControlLabel, InputLabel, Select, MenuItem, FormControl } from '@material-ui/core'
import CancelIcon from '@material-ui/icons/Cancel';
import { makeStyles } from '@material-ui/core/styles'
import { Container, TextArea, TagsContainer, Label, Input, Description } from './Modal.styles'
import languagesObj from '../../utils/supportedLanguages'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import CodeBlock from '../Code'

const Modal = ({ isOpen, changeIsOpen, editDetails, setEditDetails, changeUserPosts, userId, userPosts, theme, setSearchResults }) => {
  const classes = makeStyles(styles)
  const [tagText, setTagText] = useState('')
  const [userInput, changeUserInput] = useState(editDetails?.snippet ? {...editDetails} : {
    user_id: userId,
    tags: [], 
    public: true, 
    language: 'Javascript', 
    description: '',
    snippet: "",
    _id: userId, 
    filename: '', 
    idx: 0, 
    createdAt: '', 
    updatedAt: '', 
    _v: ''
  })

  useEffect(() => {
    console.log('modal: ', userPosts)
  }, [userPosts])


  const handleTagInput = async(e) => {
    await setTagText(e?.target.value || e.value)

    if(e.target.value.includes(',') || e.target.value.includes(' ')) {
      const newTagText = tagText.slice(0, tagText.length)

      const tagsArray = userInput.tags
      tagsArray.push(newTagText)

      await changeUserInput({...userInput, tags: tagsArray})

      setTagText('')
      e.target.value = ''
    }
      
  }

  const handleBadSubmit = (e) => {
    e.preventDefault()
  }

  const selectLanguage = async (e) => {
    changeUserInput({...userInput, language: e.target.value})
  }

  const deleteTag = async (idx) => {
    let newTags = userInput.tags
    newTags.splice(idx, 1)
    await changeUserInput({...userInput, tags: newTags})
  }

  const createOrUpdateSnippet = async (e) => {
    e.preventDefault()
    if(editDetails) updateSnippet()
    else createSnippet()
  }

  const createSnippet = async () => {
    console.log('create')
    console.log(userInput)
    await axios.post(`/kipper/${userId}`, userInput)
    changeUserPosts([...userPosts, userInput])
    setSearchResults([...userPosts, userInput])

    setEditDetails(null) 
    changeIsOpen(false) 
  }

  const updateSnippet = async () => {
    console.log('update')
    console.log(userInput)
    await axios.put('/kipper/604acd00433005638077804a', userInput)
    const updatedPost = userInput

    const newPostsArr = userPosts
    newPostsArr[userInput.idx] = updatedPost

    await changeUserPosts(newPostsArr)
    setSearchResults(newPostsArr)
    console.log(userPosts)

    setEditDetails(null)
    changeIsOpen(false)
  }

  const closeModal = (e) => {
    changeIsOpen(false)
    setEditDetails(null)
  }

  return isOpen ?  
  ReactDOM.createPortal(
    <Container onSubmit={handleBadSubmit}>

      <CancelIcon onClick={closeModal} className={classes.exitIcon}/>

      {/* Select Language */}
      <FormControl>
        <InputLabel id="language" >Language</InputLabel>
          <Select labelId="language" value={userInput?.language || 'Javascript'} onChange={selectLanguage} >
            {Object.keys(languagesObj).map((language) => (
              <MenuItem key={uuidv4()} value={language} className={classes.languageInput}>
                {language}
              </MenuItem>
            ))}
          </Select>
      </FormControl>

      {/* text input */}
      <Label htmlFor="code-snippet">Copy code here: </Label>
      <TextArea id="code-snippet" onChange={e => changeUserInput({...userInput, snippet: e.target.value})} 
      placeholder ="const snippet = 'Insert text here'" 
      value={userInput?.snippet || undefined} />

      {/* code block */}

      <CodeBlock code={userInput?.snippet || "const snippet = 'Insert text here'"} language={userInput?.language || 'javascript'} theme={theme}/>

      {/* description*/}
      <Label htmlFor="description">Description</Label>
      <Description 
        id="description"
        placeholder={userInput?.description || 'Insert Description here...'} 
        value={userInput?.description || undefined}
        onChange={(e) => changeUserInput({...userInput, description: e.target.value})} 
        />

      {/* Privacy switch */}
      <FormControlLabel
        control={<Switch checked={userInput.public} color="primary"/>}
        label={userInput.public? 'Public': 'Private'}
        
        onClick={() => changeUserInput({...userInput, public: !userInput.public})}
        />

      {/* tag input */}
      <Label htmlFor="tags">Tags - Press the <strong>space key</strong> or insert a <strong>comma</strong> ( , ) to add a new tag</Label>
      <Input id="tags" placeholder="Insert tags here..." onChange={handleTagInput}/>
        
      {/* tag chip container */}
      <TagsContainer >
      {userInput?.tags?.length > 0 ? userInput.tags.map((tag, idx) => (
        <Chip variant="default" key={uuidv4()} color="primary"
        onDelete={() => deleteTag(idx)} className={classes.chip} size="medium"
        label={tag}/>
      )): null}
    </TagsContainer>

    {/* submit button */}
    <Button variant="contained" className={classes.button} color="primary" disableElevation onClick={createOrUpdateSnippet}>Submit</Button>
    </Container>
  , document.querySelector('#portal')
  )
  : null
}

const styles = () => {
  return {
    exitIcon: {
      color: 'red',
      alignSelf: 'flex-end'
    }, 
    button: {
      width: '15%', 
      padding: '.5rem 0',
      alignSelf: 'center',
    }, 
    chip: {
      fontSize: '1.2rem'
    }, 
    languageInput: {
      color: 'white'
    }
  }
}

export default Modal
