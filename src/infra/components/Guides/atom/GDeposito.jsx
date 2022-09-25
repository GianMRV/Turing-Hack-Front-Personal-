import {
    chakra,
    Flex,
    Heading,
    Image,
    Text,
} from "@chakra-ui/react";

const URL = 'https://www.presse-citron.net/app/uploads/2022/01/Transfe%CC%81rer-ses-bitcoins.jpg'

function GDeposito(){
    return(
        <>
            <Flex direction={'column'}>
                <Image src={URL} ></Image>
                <Heading>Deposita o paga</Heading>
                <Text pt={5}>
                    <chakra.h2 fontWeight={'bold'} fontSize={25} color={'rgba(118,0,156,0.7)'}>Paso 1:</chakra.h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sunt ipsa blanditiis excepturi sequi, amet animi cum ullam ex aliquid! Perferendis recusandae delectus distinctio, consectetur voluptatibus minus quibusdam. Blanditiis, aperiam!
                    <chakra.h2 pt={3} fontWeight={'bold'} fontSize={25} color={'rgba(118,0,156,0.7)'}>Paso 2:</chakra.h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ad libero laboriosam voluptate molestiae optio eligendi perspiciatis nisi dolor tempore deleniti, rerum velit doloribus nemo vitae! Quas sint fugit necessitatibus?
                    <chakra.h2 pt={3} fontWeight={'bold'} fontSize={25} color={'rgba(118,0,156,0.7)'}>Paso 3:</chakra.h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae expedita quisquam voluptates illo perferendis quis, omnis vitae optio dolores esse cumque tempore laudantium enim natus suscipit at ea beatae? Aut.
                    <chakra.h2 pt={3} fontWeight={'bold'} fontSize={25} color={'rgba(118,0,156,0.7)'}>Paso 4:</chakra.h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quaerat a dicta perspiciatis harum libero adipisci, animi quibusdam quis recusandae labore velit deleniti. Eos minima nulla molestias delectus exercitationem eligendi.
                    <chakra.h2 pt={3} fontWeight={'bold'} fontSize={25} color={'rgba(118,0,156,0.7)'}>Paso 5:</chakra.h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure expedita quas commodi nostrum voluptates sint laudantium odio eos repellendus nobis quam inventore, dignissimos explicabo laborum exercitationem magnam illo aut quisquam!
                </Text>
            </Flex>
        </>
    )
}

export default GDeposito;