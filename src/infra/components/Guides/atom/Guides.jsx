import {
    Flex,
    Heading,
    Text,
} from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

import NavContainer from "../../Navbar/atom/NavContainer";
import NavLinks from "../../Navbar/atom/NavLinks";
import Logo from "../../Navbar/atom/Logo";
import MenuToggle from "../../Navbar/atom/MenuToggle";

import Navbar from "../../Navbar/Navbar";

function Guides(){
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
    return(
        <>
            <NavContainer>
				<Logo toggle={toggle} isOpen={isOpen} />
				<MenuToggle toggle={toggle} isOpen={isOpen} />
				<NavLinks isOpen={isOpen} />
			</NavContainer>
            <Flex
                bg={'#F0F0F0'}
                p={10}
                gap={10}
                minH={'100vh'}
                direction={'column'}>
                <Heading textTransform={'uppercase'} fontSize={50}>Guías</Heading>
                <Flex gap={10} direction={{ base: 'column', md: 'row' }}>
                    <Flex
                        minW={20}
                        direction={'column'}
                        color={'blue'}
                        fontSize={'15px'}
                        gap={5}>
                        <Link to='/guides/GTrade'>Haz Trading</Link>
                        <Link to='/guides/GDeposito'>Deposita o paga</Link>
                        <Link to='/guides/GWallet'>Configura tu Wallet</Link>
                    </Flex>
                    <Outlet />
                </Flex>
            </Flex>
        </>
    )
}

export default Guides;