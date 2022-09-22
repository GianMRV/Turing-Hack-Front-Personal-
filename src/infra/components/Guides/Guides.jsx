import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

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
            <Flex
                direction={'column'}
                gap={2}>
                <Flex
                    direction={{ base: 'column' , md: 'row' }}
                    alignItems={'center'}
                    borderWidth={'2px'}>
                    <Image src={trade.url} w={{ base: 'full', md: '40%'}}></Image>
                    <Box px={5}>
                        <Heading textAlign={'center'}>¿Cómo hacer Trading?</Heading>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde repudiandae laudantium doloremque nam in eos, ipsum vitae fugit tempore quasi soluta accusamus non id expedita, placeat velit autem architecto. Itaque?
                        </Text>
                    </Box>
                </Flex>
                <Flex
                    direction={{ base: 'column' , md: 'row-reverse' }}
                    alignItems={'center'}
                    borderWidth={'2px'}>
                    <Image src={deposito.url} w={{ base: 'full', md: '40%'}}></Image>
                    <Box px={5}>
                        <Heading textAlign={'center'}>Depositar o pagar</Heading>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde repudiandae laudantium doloremque nam in eos, ipsum vitae fugit tempore quasi soluta accusamus non id expedita, placeat velit autem architecto. Itaque?
                        </Text>
                    </Box>
                </Flex>
                <Flex
                    direction={{ base: 'column' , md: 'row' }}
                    alignItems={'center'}
                    borderWidth={'2px'}>
                    <Image src={wallet.url} w={{ base: 'full', md: '40%', lg: '36%'}}></Image>
                    <Box px={5}>
                        <Heading textAlign={'center'}>Configura tu Wallet</Heading>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde repudiandae laudantium doloremque nam in eos, ipsum vitae fugit tempore quasi soluta accusamus non id expedita, placeat velit autem architecto. Itaque?
                        </Text>
                    </Box>
                </Flex>
            </Flex>
        </>
    )
}


export default Guides;