import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import theme from '../src/themes'
import '../src/themes/style.css'

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default App
