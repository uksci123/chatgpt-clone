import React from 'react'
import NewChat from './NewChat'

const SideBar = () => {
  return (
    <div className='flex flex-col h-screen p-2'>
        <div className='flex-1'>
            <div>
                    {/* New Chat*/}
                    <NewChat/>
                <div>
                    {/* Model Selection */}
                </div>

                    {/* Map through the Chat Row*/}
            </div>
        </div>
    </div>
  )
}

export default SideBar