import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const trade = {
    url: 'https://i.pinimg.com/564x/96/40/d3/9640d3f7529fcd5ae5778591aabda45a.jpg'
}
const deposito = {
    url: 'https://www.presse-citron.net/app/uploads/2022/01/Transfe%CC%81rer-ses-bitcoins.jpg'
}
const wallet = {
    url: 'https://www.business2community.com/es/wp-content/uploads/sites/5/2022/04/Mejores-Bitcoin-wallets-en-2022-monederos-de-BTC-comparados-hoy.jpeg'
}

function Guides(){
    return(
        <>
            <Heading></Heading>
            <Flex
                direction={{ base: 'column', md: 'row' }}
                px={10}
                py={10}
                gap={2}>
                <Link to='/signin'>
                    <Box
                        _hover={{
                            shadow: 'outline',
                            transform: 'scale(0.98)'
                        }}
                        shadow={'2xl'}
                        direction={'column'}
                        alignItems={'center'}
                        borderWidth={'2px'}>
                        <Image src={trade.url} w={'full'}></Image>
                        <Box px={5}>
                            <Heading textAlign={'center'}>Haz Trading</Heading>
                            <Text textAlign={'left'}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde repudiandae laudantium doloremque nam in eos, ipsum vitae fugit tempore quasi soluta accusamus non id expedita, placeat velit autem architecto. Itaque?
                            </Text>
                        </Box>
                    </Box>
                </Link>
                <Link to='/login'>
                    <Box
                        _hover={{
                            shadow: 'outline',
                            transform: 'scale(0.98)'
                        }}
                        shadow={'2xl'}
                        direction={'column'}
                        alignItems={'center'}
                        borderWidth={'2px'}>
                        <Image src={deposito.url} w={'full'}></Image>
                        <Box px={5}>
                            <Heading textAlign={'center'}>Deposita o paga</Heading>
                            <Text textAlign={'left'}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde repudiandae laudantium doloremque nam in eos, ipsum vitae fugit tempore quasi soluta accusamus non id expedita, placeat velit autem architecto. Itaque?
                            </Text>
                        </Box>
                    </Box>
                </Link>
                <Link to='/recover'>
                    <Box
                        _hover={{
                            shadow: 'outline',
                            transform: 'scale(0.98)'
                        }}
                        shadow={'2xl'}
                        direction={'column'}
                        alignItems={'center'}
                        borderWidth={'2px'}>
                        <Image src={wallet.url} w={'full'}></Image>
                        <Box px={5}>
                            <Heading textAlign={'center'}>Configura tu Wallet</Heading>
                            <Text textAlign={'left'}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde repudiandae laudantium doloremque nam in eos, ipsum vitae fugit tempore quasi soluta accusamus non id expedita, placeat velit autem architecto. Itaque?
                            </Text>
                        </Box>
                    </Box>
                </Link>
            </Flex>
        </>
    )
}


export default Guides;