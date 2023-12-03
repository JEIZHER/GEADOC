import {useState, createContext } from 'react'
import {  } from "react"

export const GeaDocContext = createContext()

export const GeaDocProvider = ({ children }) => {
const [isOpen,setIsOpen]= useState(true)	
	return(
		 <GeaDocContext.Provider value={{
			isOpen,
			setIsOpen
		 }}>
			{children}
		 </GeaDocContext.Provider>)
}
