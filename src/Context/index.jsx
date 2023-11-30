import { createContext } from 'react'

export const ContextDatCryptos = createContext()

export const ContextCryptosProvider = ({ children }) => {

	return (
		<ContextDatCryptos.Provider value={{}}>
			{children}
		</ContextDatCryptos.Provider>
	)
}
