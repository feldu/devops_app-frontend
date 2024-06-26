import React from "react";
import Flex from "@chakra-ui/core/dist/Flex";
import MainHeader from "../../components/MainHeader";
import CreateReviewForm from "./components/CreateReviewForm";
import UserReviewList from "./components/UserReviewList";


export default function UserPage() {
    return (
        <Flex direction="column">
            <MainHeader/>
            <Flex w="full" align="center" justifyContent="left" alignItems="stretch" flex={1}
                  p={5}>
                <UserReviewList/>
                <Flex direction="column" w="100%" ml={5}>
                    <CreateReviewForm/>
                </Flex>
            </Flex>
        </Flex>
    );
}