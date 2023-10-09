import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/solid';
import { collection, deleteDoc, doc, orderBy, query } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../../../firebase';
type Props = {
    id : string ;
  }
const ChatRow = ({id}:Props) => {
  const pathname = usePathname()
  const router   = useRouter()
  const {data : session } = useSession()
  const [active , setActive] = useState(false)

  const [message] = useCollection(
    collection(db,'users',session?.user?.email!,'chat',id,'message')
  )

  const removeChat = async() =>{
    await deleteDoc(doc(db,'users',session?.user?.email!,'chats',id))
    router.push('/')
  }
  useEffect(()=>{
    if(!pathname) return ; 
    setActive(pathname.includes(id))
  },[pathname , id])

  return (
    <Link href={`/chat/${id}`} className={`chatRow ${active && "bg-gray-700/50"}`}>
        <ChatBubbleLeftIcon className='h-5 w-5'/>
        <p className='flex-1 hidden md:inline-flex truncate'>
            {message?.docs[message?.docs.length-1]?.data().text || "New Chat"}
        </p>
        <TrashIcon onClick={removeChat} className='h-5 w-5 text-gray-700 hover:text-red-700'/>
    </Link >
  )
}

export default ChatRow