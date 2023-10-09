'use client'

import { Toaster } from "react-hot-toast"


// This is how we can ue the wrapper inside the Next.js 13
const ClientProvider = () => {
  return (
    <div>
        <Toaster position="top-right"/>
        {/*client provider 1 */}
        {/*client provider 2 */}
        {/*client provider 3 */}
    </div>
  )
}

export default ClientProvider