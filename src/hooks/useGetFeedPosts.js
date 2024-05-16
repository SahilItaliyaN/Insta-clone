import { useEffect, useState } from "react";
import usePostStore from "../store/postStore";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import useUserProfileStore from "../store/userProfileStore";

const useGetFeedPosts = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { posts, setPosts } = usePostStore();
    const authUser = useAuthStore((state) => state.user);
    const showToast = useShowToast();
    const { setUserProfile } = useUserProfileStore();

    useEffect(() => {
        const getFeedPosts = async () => {
            setIsLoading(true);
            if (authUser.following.length === 0) {
                setIsLoading(false);
                setPosts([]);
                return;
            }
            const q = query(
                collection(firestore, "posts"),
                where("createdBy", "in", authUser.following)
            );
            try {
                const querySnapShot = await getDocs(q);
                const feedPosts = [];

                querySnapShot.forEach((doc) => {
                feedPosts.push({ id: doc.id, ...doc.data() });
                });

                feedPosts.sort((a, b) => b.createdAt - a.createdAt);
                setPosts(feedPosts);
            } catch (error) {
                showToast("Error", error.message, "error");
            } finally {
                setIsLoading(false);
            }
        };
        if (authUser) getFeedPosts();
    }, [authUser, showToast, setPosts, setUserProfile]);

    return { isLoading, posts };
};

export default useGetFeedPosts;
