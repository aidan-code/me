'use client'

import React, {useContext, createContext, ReactNode, useState} from 'react'
import { BoltIcon } from "@heroicons/react/24/outline";
import { XIcon } from 'lucide-react';
import { handleClientScriptLoad } from 'next/script';

interface contextProps{
    showEditor:() => void
    
}
export const TextContext = createContext<contextProps|undefined>(undefined)

interface textcontextProps {
    children: ReactNode
}

// const textProviderProps :contextProps = {
    
// }

export const TextProvider:React.FC<textcontextProps> = ({children}) => {

    const [showState, setShowState] = useState(false)
    const [textValue, setTextValue] = useState("Hello Ademola, I'm ...")
    const showEditor = () => {
        setShowState(true)
    }

    const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        const {value} = e.target
        setTextValue(value)
    }
    const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(textValue)
    }


    return(
        <TextContext.Provider value = {{showEditor}}>
            <div className='relative'>
                {showState &&   
                <>
                <div className="absolute top-0 left-0 right-0 bottom-0 blur bg-black/10 backdrop-blur-xl z-100000000"></div>
                <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-100000000000000000000 w-5/6 md:w-1/2'>
                <div className='border-t border-l border-r border-white/10 rounded-t-3xl p-5 flex items-center justify-between'>
                <div className='w-full flex items-center justify-center'>
                    <BoltIcon className="h-5" />
                    <p className=''>What do you want to build?</p>
                </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <textarea
                    rows={24}
                    className='w-full border bg-black/5 p-5 border-white/10 outline-none rounded-b font-monoSpace'
                    value={textValue}
                    onChange={handleChange}
                    />
                    <div className="flex justify-center gap-2">
                    <button className='px-5 py-3 bg-[#495F41] text-white rounded font-bold cursor-pointer'>Close</button>
                    <button className='px-5 py-3 bg-white text-[#495F41] rounded font-bold cursor-pointer'>Submit</button>
                    </div>
                </form>
            </div>
         </>
                 }
            {children}
                    </div>
        </TextContext.Provider>
    )
}

// Custom hook to use the TextContext
export const useText = () => {
    const context = useContext(TextContext)
    if (context === undefined) {
        throw new Error('useText must be used within a TextProvider')
    }
    return context
}
