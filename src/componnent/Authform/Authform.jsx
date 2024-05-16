import { Box,  Flex, Image,  Text, VStack } from "@chakra-ui/react"
import { useState } from "react"
import Login from "./Login";
import SignUp from "./SignUp";
import GoogleAuth from "./GoogleAuth";

const Authform = () => {
  const [isLogin, setisLogin] = useState(true);

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src="logo.png" cursor={"pointer"} alt="Instargarm" />

          {isLogin ? <Login /> : <SignUp />}


          {/* --------------------- OR ------------------- */}
          <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
            <Box flex={2} h={"1px"} bg={"gray.400"}></Box>
            <Text m={1} color={"white"}>OR</Text>
            <Box flex={2} h={"1px"} bg={"gray.400"}></Box>
          </Flex>

          <GoogleAuth prefix={isLogin ? "Log in" : "Sign up"}/>
        </VStack>
      </Box>

      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have account?" : "Already have an account?"}
          </Box>
          <Box onClick={() => setisLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>
            {isLogin ? "Sign Up" : "Log In"}
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default Authform