import Chat from '@/app/components/Chat';
import ChatInput from '@/app/components/ChatInput';
import React from 'react'
type Props = {
  params:{
    id:string
  }
}
function ChatPage({params:{id}}:Props) {
  return (
    <div className='flex flex-col overflow-hidden h-screen'>
      {/*Chat*/}
        <Chat chatId = {id}/>
      {/*Chat Input*/}
        <ChatInput chatId = {id}/>
    </div>
  )
}

export default ChatPage;