import React, {useEffect} from "react";
import Flex from "@chakra-ui/core/dist/Flex";
import MainHeader from "../../components/MainHeader";
import {useDispatch, useSelector} from "react-redux";
import * as thunks from "../../redux/thunks";
import {Button, Heading, Text} from "@chakra-ui/react";
import {Box} from "@chakra-ui/core";


export default function ModeratorPage() {
    const dispatch = useDispatch();
    const approvedReviews = useSelector(state => state.review.approvedReviews);
    const notApprovedReviews = useSelector(state => state.review.notApprovedReviews);

    useEffect(() => {
        dispatch(thunks.getReviewsByApproveTrue());
        dispatch(thunks.getReviewsByApproveFalse());
    }, [dispatch]);

    return (<Flex direction="column">
            <MainHeader/>
            <Flex w="full" align="center" justifyContent="left" alignItems="stretch" flex={1}
                  p={5}>
                <Flex direction="column" width="50%" alignItems="stretch">
                    <Heading>Подтверждённые отзывы</Heading>
                    {
                        approvedReviews.map((r, i) => (
                            <Box key={i} p={2} px={5} mt={5} borderWidth={1} borderRadius={14} boxShadow="lg" w="100%">
                                <Text><b>Номер:</b> {r.id}</Text>
                                <Text><b>Автор:</b> {r.authorName}</Text>
                                <Text><b>Модфикикация:</b> {r.modification}</Text>
                                <Text><b>Модель:</b> {r.carModel}</Text>
                                <Text><b>Текст:</b> {r.reviewText}</Text>
                                <Text><b>Пробег:</b> {r.mileage}</Text>
                                <Text><b>Совет:</b> {r.advice}</Text>
                            </Box>
                        ))
                    }
                </Flex>
                <Flex direction="column" w="50%" ml={5}>
                    <Heading>Ожидают подтверждения</Heading>
                    {
                        notApprovedReviews.map((r, i) => (
                            <Box key={i} p={2} px={5} mt={5} borderWidth={1} borderRadius={14} boxShadow="lg" w="100%">
                                <Text><b>Номер:</b> {r.id}</Text>
                                <Text><b>Автор:</b> {r.authorName}</Text>
                                <Text><b>Модфикикация:</b> {r.modification}</Text>
                                <Text><b>Модель:</b> {r.carModel}</Text>
                                <Text><b>Текст:</b> {r.reviewText}</Text>
                                <Text><b>Пробег:</b> {r.mileage}</Text>
                                <Text><b>Совет:</b> {r.advice}</Text>
                                <Text><b>Действие:</b></Text>
                                <Button color={"red"} mr={15} mt={5} mb={3} type="submit" onClick={e => {
                                    e.preventDefault();
                                    dispatch(thunks.removeReviewById(r.id))}}>Удалить</Button>
                                <Button color={"green"} ml={15} mt={5} mb={3} type="submit" onClick={e => {
                                    e.preventDefault();
                                    dispatch(thunks.applyReviewById(r.id))}}>Подтвердить</Button>
                            </Box>
                        ))
                    }
                </Flex>
            </Flex>
        </Flex>);
}