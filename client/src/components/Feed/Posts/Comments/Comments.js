import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

export const Comments = (props) => {
  return (
    <Container>
      Coments here
    </Container>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)

const Container = styled.div`
  background: #202020;
  min-height: 10rem;
`
Container.displayName = 'CommentsContainer'