import {
	Stack,
	VStack,
	HStack,
	Heading,
	Text,
	Button,
	AspectRatio,
	Image,
	Divider,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react'

const Details = () => {
	const { toggleColorMode } = useColorMode()
	const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50')
	const secondaryTextColor = useColorModeValue('gray.600', 'gray.400')

	return (
		<VStack w='full' h='full' p={10} spacing={6} alignItems='flex-start' bg={bgColor}>
			<VStack spacing={3} alignItems='flex-start'>
				<Heading size='2xl'>Your cart</Heading>
				<Text>
					If price is too hard on your eyes,{' '}
					<Button onClick={toggleColorMode} variant='link' colorScheme='black'>
						try changing the theme.
					</Button>
				</Text>
			</VStack>
			<HStack spacing={6} w='full' alignItems='center'>
				<AspectRatio ratio={1} w={24}>
					<Image src='/images/skateboard.jpg' alt='Skateboard' />
				</AspectRatio>
				<Stack
					w='full'
					spacing={0}
					direction='row'
					justifyContent='space-between'
					alignItems='center'>
					<VStack w='full' spacing={0} alignItems='flex-start'>
						<Heading size='md'>Penny board</Heading>
						<Text fontSize='lg'>PNYCOMP27541</Text>
					</VStack>
					<Heading size='sm' textAlign='end'>
						$119.00
					</Heading>
				</Stack>
			</HStack>
			<VStack w='full' spacing={4} alignItems='stretch'>
				<HStack justifyContent='space-between'>
					<Text color={secondaryTextColor}>Subtotal</Text>
					<Heading size='sm'>$119.00</Heading>
				</HStack>
				<HStack justifyContent='space-between'>
					<Text color={secondaryTextColor}>Shipping</Text>
					<Heading size='sm'>$19.99</Heading>
				</HStack>
				<HStack justifyContent='space-between'>
					<Text color={secondaryTextColor}>Taxes (estimatied)</Text>
					<Heading size='sm'>$23.80</Heading>
				</HStack>
				<Divider />
				<HStack justifyContent='space-between'>
					<Text color={secondaryTextColor}>Total</Text>
					<Heading size='xl'>$162.79</Heading>
				</HStack>
			</VStack>
		</VStack>
	)
}

export default Details
