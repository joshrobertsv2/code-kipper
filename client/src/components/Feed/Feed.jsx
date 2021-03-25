import React from 'react'
import * as styles from './Feed.styles'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'

const Feed = () => {

  return (
    <>
      <Header/>
      <Sidebar />
      <styles.Container>
        Coming soon!
      </styles.Container>
    </>
  )
}

export default Feed
