'use client'
import { PaperAirplaneIcon } from "@heroicons/react/24/solid"
import { useSession } from "next-auth/react"
import { FormEvent, useState } from "react"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../../../firebase"
import toast from "react-hot-toast"
type Props = {
    chatId : string
}
const ChatInput = ({chatId}:Props) => {
  const [prompt , setPrompt] = useState('');
  const {data : session} = useSession()
  
  // useSwr to use Model 

  const model = 'text-curie-001'

  const sendMessage = async(e : FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    if(!prompt) return ; 

    const input = prompt.trim();

    setPrompt("");

    const message : Message = {
        text: input,
        createdAt : serverTimestamp(),
        user:{
            _id: session?.user?.email!,
            name: session?.user?.name!,
            avatar: session?.user?.image! || `https://ui-avatar.com/api/?name=${session?.user?.name}`
        }
    }

    await addDoc(
        collection(db,'users',session?.user?.email! , 'chats', chatId , 'messages'),
        message
        )

        // Toast Notification to say loading!!
    const notification = toast.loading("ChatGpt is thinking...")
    

    await fetch('../api/askQuestion',{
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            prompt : input , 
            chatId ,
            model , 
            session 
        })
    }).then(()=>{
        // toast notification to say successful !!!
        toast.success('ChatGpt has responded!' , {
            id:notification,
        })
    })
  }

  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm">
        <form onSubmit={sendMessage} className="p-5 space-x-5 flex">
            <input 
            className=" bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
            disabled = {!session}
            value={prompt}
            onChange={(e)=>setPrompt(e.target.value)}
            type='text' 
            placeholder='Type your message here...' />

            <button 
            disabled={!session || !prompt} 

            className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
            type='submit'
            >
                <PaperAirplaneIcon className='h-4 w-4 -rotate-45'/>
            </button>
        </form>

        {/* Model Selection */}
        <div></div>
    </div>
  )
}

export default ChatInput