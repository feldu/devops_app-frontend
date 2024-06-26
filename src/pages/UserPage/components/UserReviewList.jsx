import {Box} from "@chakra-ui/core";
import React, {useEffect} from "react";
import {Heading} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import UserReviewsTable from "./components/UserReviewsTable";
import {getReviewsByUser} from "../../../redux/thunks";


export default function UserReviewList() {
    const reviews = useSelector(state => state.review.userReviews);
    const username = useSelector(state => state.authorization.currentUser.username);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getReviewsByUser(username));
    }, [dispatch, username]);

    return (
        <Box py={3} px={10} borderWidth={1} borderRadius={14} boxShadow="lg" w="100%" h="100%">
                <Heading textAlign="center" mt={3} size="lg" mb={8}>Статусы ваших отзывов</Heading>
            <UserReviewsTable reviewList={reviews}/>
        </Box>
    )
}