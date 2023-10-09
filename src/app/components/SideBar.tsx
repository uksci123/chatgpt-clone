'use client'
import React from 'react'
import NewChat from './NewChat'
import {collection, orderBy, query} from 'firebase/firestore'
import { signOut, useSession } from 'next-auth/react'
import {useCollection} from 'react-firebase-hooks/firestore'
import Image from 'next/image'
import { ClockIcon, EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import { db } from '../../../firebase'
import ChatRow from './ChatRow'
import ModelSelection from './ModelSelection'

const SideBar = () => {
  const {data : session} = useSession(); 

  const [chats , loading , error] = useCollection(
    session && 
    query(
      collection(db,'users' , session.user?.email! , 'chats'),
      orderBy("createdAt" , "asc")
    )
  );

  return (
    <div className='flex flex-col h-screen p-2'>
        <div className='flex-1'>
            <div>
                    {/* New Chat*/}
                    <NewChat/>
                <div className='hidden sm:inline'>
                    {/* Model Selection */}
                    <ModelSelection/>
                </div>

                    {/* Map through the Chat Row*/}
                    {chats?.docs.map(chat => (
                        <ChatRow key={chat.id} id={chat.id}/>
                    ))}
            </div>
        </div>
            {session && (
              <div className='chatRow' onClick={()=>signOut()}>
                <Image 
                  src={session.user?.image!} 
                  alt = "Profile Pic"  
                  width={100}
                  height={100}
                  className='profileImg'/>
                  <p className='text-gray text-lg px-4'>{session.user?.name}</p>
                  <EllipsisVerticalIcon
                   className='h-6 w-6'/>
              </div>
            )}
    </div>
  )
}

export default SideBar