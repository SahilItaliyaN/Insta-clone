import { Box, Image } from "@chakra-ui/react"
import PostHeader from "./PostHeader"
import PostFooter from "./PostFooter"
import useGetUserProfileById from "../../hooks/useGetUserProfileById";

const FeedPost = ({post}) => {
    const {userProfile} = useGetUserProfileById(post.createdBy);
    return (
        <>
        <PostHeader post={post} createdProfile={userProfile}/>
        <Box my={2} borderRadius={4} overflow={"hidden"}>
            <Image src={post.imageURL} alt={"Feed post image"} />
        </Box>
        <PostFooter post={post} createdProfile={userProfile}/>
        </>
    )
}

export default FeedPost
