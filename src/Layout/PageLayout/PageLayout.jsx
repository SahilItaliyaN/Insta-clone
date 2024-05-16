import { Box, Flex, Spinner } from "@chakra-ui/react"
import SIdebar from "../../componnent/Sidebar/SIdebar"
import { useLocation } from "react-router-dom"
import { auth } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from "../../componnent/Navbar/Navbar";

const PageLayout = ({children}) => {
    const { pathname } = useLocation();
    const [user, loading] = useAuthState(auth);
    const canRanderSidebar = pathname !== "/auth" && user;
    const canRanderNavbar = !user && !loading && pathname !== "/auth";

    const checkingUserIsAuth = !user && loading;

    if (checkingUserIsAuth) return <PageLayoutSpinner />

    return (
        <Flex flexDir={canRanderNavbar ? "column" : "row"}>
            {/* side bar in the left */}
            {canRanderSidebar ? (
                <Box w={{ base: "70px", md: "240px" }}>
                    <SIdebar />
                </Box>
            ) : null}

            {/* Navabar */}
            {canRanderNavbar ? <Navbar /> : null}


            {/* the page contant on the right */}
            <Box flex={1} w={{ base: "calc(100%-70px)", md: "calc(100%-240px)" }} mx={"auto"}>
                {children}
            </Box>
        </Flex>
    )
}

export default PageLayout

const PageLayoutSpinner = () => {
    return(
        <Flex flexDir={"column"} h={"100vh"} alignItems={"center"} justifyContent={"center"}>
            <Spinner size="xl" />
        </Flex>
    )
}