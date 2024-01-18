import React from 'react'
import Sidebar from './Sidebar'
import OpenConversation from './OpenConversation'
import { useConversations } from '../contexts/ConversationsProvider'

export default function Dashboard({id}) {

  const { selectedConversationIndex } = useConversations()
  //console.log('Selected Conversation:', selectedConversation)
  return (
    <div className="d-flex" style={{height: '100vh'}}>
        <Sidebar id = {id}/>
        {selectedConversationIndex !==null && (<OpenConversation/>)}
    </div>
  )
}
