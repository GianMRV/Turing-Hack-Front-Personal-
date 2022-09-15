// dependencies
import axios from "axios";
import { POST } from "../../../api/endpoints";
import { schema, ERROR_YUP } from "../../../api/yup";

// hooks
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useToast } from "@chakra-ui/react";

// components
import { Button, FormControl, FormLabel, FormErrorMessage, Input, 
         Stack, InputGroup, InputRightElement, IconButton
} from '@chakra-ui/react';

// icons
import { Visibility, VisibilityOff } from "@mui/icons-material";


export default function SignForm () {

    const [show, setShow] = useState(false);

    const handleClick = () => setShow(!show);

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const toast = useToast();

    const resultToast = ( status, title ) => {

        return toast({
            title: title,
            status: status,
            duration: 5000,
            isClosable: true,
        });
    };

    // MOCK
    const [email, setEmail] = useState("alan@turing.com");
    const [psw, setPsw] = useState("Alanturing123.");
    const users = [{ email: "alan@turing.com", psw: "Alanturing123." }];

    // const [auth, setAuth] = useState(localStorage.getItem(localStorage.getItem("auth") || false));
    let [auth, setAuth] = useState(false);

    const onSubmit = async ( payload ) => {

        try {

            // MOCK
            const account = users.find( (user) => user.email == email );
            if (account && account.psw == psw) {
                setAuth(true);
                localStorage.setItem("auth", true);
                console.log(auth);
            }

            // await axios.post(POST.NEW_USER, payload);
            resultToast("success", "¡Tu cuenta ha sido registrada!🎉");
        } 
        catch (error) { 
            resultToast("error", "Se produjo un problema 😥");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack
                gap={2}
                >
                    <FormControl isInvalid={errors.fname}>
                        <FormLabel> Nombre </FormLabel>
                            <Input type="text" size="sm" placeholder="Alan" 
                            
                            {...register("fname")} 
                            />
                        <FormErrorMessage> {errors.fname && ERROR_YUP.MSG_NAME} </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.lname}>
                        <FormLabel> Apellido </FormLabel>
                            <Input type="text" size="sm" placeholder="Turing" 

                            {...register("lname")}
                            />
                        <FormErrorMessage> {errors.lname && ERROR_YUP.MSG_NAME} </FormErrorMessage>
                    </FormControl>
                    
                    <FormControl isInvalid={errors.alias}>
                        <FormLabel> Alias de seguridad </FormLabel>
                            <Input type="text" size="sm" placeholder="enigma.breaker18" 

                            {...register("alias")} 
                            />
                        <FormErrorMessage> {errors.alias && ERROR_YUP.MSG_ALIAS} </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.email}>
                        <FormLabel> Correo electrónico </FormLabel>
                            <Input type="email" size="sm" placeholder="alan@turing.com" 
                            // MOCK
                            value={email}
                            onChange={ (event) => setEmail(event.target.value) }

                            {...register("email")} 
                            />
                        <FormErrorMessage> {errors.email && ERROR_YUP.MSG_EMAIL} </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.psw}>
                        <FormLabel> Contraseña </FormLabel>
                            <InputGroup size="sm">
                                <Input placeholder="Ingresa una contraseña" type={show ? 'text' : 'password'}
                                // MOCK
                                value={psw}
                                onChange={ (event) => setPsw(event.target.value) }

                                {...register("psw")}
                                />
                                <InputRightElement>
                                    <IconButton size="sm" variant={"ghost"} onClick={handleClick}
                                    icon={show ? < Visibility fontSize="small" /> : < VisibilityOff fontSize="small" />} 
                                    />
                                </InputRightElement>
                            </InputGroup>
                        <FormErrorMessage> {errors.psw && ERROR_YUP.MSG_PSW} </FormErrorMessage>   
                    </FormControl>

                    <Stack pt={4}>
                        <Button colorScheme={'purple'} variant={'solid'} type="submit">
                            Registrarse
                        </Button>
                    </Stack>

                </Stack>
            </form>
        </>
    );
}