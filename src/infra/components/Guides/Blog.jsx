import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import GTrade from "./atom/GTrade";

const trade = {
    url: 'https://i.pinimg.com/564x/96/40/d3/9640d3f7529fcd5ae5778591aabda45a.jpg'
}
const deposito = {
    url: 'https://www.presse-citron.net/app/uploads/2022/01/Transfe%CC%81rer-ses-bitcoins.jpg'
}
const wallet = {
    url: 'https://www.business2community.com/es/wp-content/uploads/sites/5/2022/04/Mejores-Bitcoin-wallets-en-2022-monederos-de-BTC-comparados-hoy.jpeg'
}

function Blog(){
    return(
        <Flex
            direction={'column'}
            bg={'#F0F0F0'}
            pt={10}>
            <Heading textAlign={'center'}>¿Cómo accionar dentro de la plataforma?</Heading>
            <Flex
                direction={{ base: 'column', md: 'row' }}
                px={10}
                py={10}
                gap={4}>
                <Link to='/guides/GTrade'>
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
                <Link to='/guides/GDeposito'>
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
                <Link to='/guides/GWallet'>
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
        </Flex>
    )
}


export default Blog;