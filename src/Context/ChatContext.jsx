import React, { createContext, useState } from 'react'

export const ChatContext = createContext()

export const Chatprovider = ({children}) => {
    const [selectedChat , setSelectedChat] = useState(null)

    return (
        <ChatContext.Provider value={{selectedChat , setSelectedChat}}>
            {children}
        </ChatContext.Provider>
    )
}