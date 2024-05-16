import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react"
import Authform from "../../componnent/Authform/Authform"



const Authpage = () => {
    return (
        <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
            <Container maxW={"container.md"} padding={0}>

                <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
                    {/* {left-hand side} */}
                    <Box display={{base:"none",md:"block"}}>
                        <Image src="/auth.png" h={650} alt="phone image"/>
                    </Box>

                {/* right hand-side */}
                <VStack spacing={4} align={"stretch"}>
                    <Authform />
                    <Box textAlign={"center"}>Get the app</Box>
                    <Flex gap={5} justifyContent={"center"}>
                        <Image src="/playstore.png" h={10} alt="Playstore image" />
                        <Image src="/microsoft.png" h={10} alt="microsoft image" />
                    </Flex>
                </VStack>
                </Flex>
            </Container>
        </Flex>
    )
}

export default Authpage
