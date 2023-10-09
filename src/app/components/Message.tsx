import { DocumentData } from "firebase-admin/firestore"
import Image from "next/image"

type Props = {
    message : DocumentData
}

const Message = ({message}:Props) => {
  const isChatGpt = message.user.name === "ChatGpt"
  return (
    <div className={`py-5 text-white ${isChatGpt && "bg-[#434654]"}`}>
        <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
            <Image src = {message.user.avatar} width={10} height={10} alt='imagea' className="h-8 w-8" />
            <p className="pt-1 text-sm">{message.text}</p>
        </div>
    </div>
  )
}

export default Message