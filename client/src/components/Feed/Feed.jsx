import React, { useEffect } from 'react'
import * as styles from './Feed.styles'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions/actions'
import CodeBlock from '../Code'
import { v4 as uuidv4} from 'uuid'

const Feed = ({user_id, fetchFeed, feed}) => {

  useEffect(() => {
    fetchFeed(user_id)
    // eslint-disable-next-line 
  }, [])

  return (
    <>
      <Header/>
      <Sidebar />
      <styles.Container>
        {feed.map( (post, idx) => (
          <div key={uuidv4()}>
            <p></p>
            <CodeBlock code={post?.snippet || '//ERROR - cannot load snippet'}
            language={post?.language || ''}/>
          </div>
        ))}
      </styles.Container>
    </>
  )
}

const mapStateToProps = (state) => ({
  user_id: state.user.id, 
  feed: state.feed,
})

const mapDispatchToProps = (dispatch) => ({
  fetchFeed: (user_id) => dispatch(actions.fetchUserFeed(user_id)), 
})


export default connect(mapStateToProps, mapDispatchToProps)(Feed)


