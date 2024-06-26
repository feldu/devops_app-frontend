import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Box, Button, Heading} from '@chakra-ui/react';
import InputText from "../../../components/InputText";
import * as thunks from "../../../redux/thunks";


export default function CreateReviewForm() {
    const username = useSelector(state => state.authorization.currentUser.username);
    const [carModel, setCarModel] = useState('Приора');
    const [modification, setModification] = useState('43 до н.э.');
    const [manufactureYear, setManufactureYear] = useState('2021-02-17');
    const [reviewText, setReviewText] = useState('Каеф');
    const [pros, setPros] = useState('норм тачка');
    const [cons, setCons] = useState('гавной тянет');
    const [advice, setAdvice] = useState('не бери, пожуйлиста');
    const [ownershipDate, setOwnershipDate] = useState('2022-02-20');
    const [mileage, setMileage] = useState(1488);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(thunks.getUserInfo());
    }, [dispatch]);

    const submitHandler = e => {
        e.preventDefault();
        dispatch(thunks.addReview({authorName: username,
            carModel,
            modification,
            manufactureYear,
            reviewText,
            pros,
            cons,
            advice,
            ownershipDate,
            mileage,}));
    };

    return (<Box p={2} px={5} borderWidth={1} borderRadius={14} boxShadow="lg" w="100%">
        <Box textAlign="center">
            <Heading size="lg">Напиши отзыв</Heading>
        </Box>
        <Box my={4} textAlign="left">
            <form>
                <InputText value={carModel} setValue={setCarModel} label={"Модель машины"}/>
                <InputText value={modification} setValue={setModification} label={"Модифицирована"}/>
                <InputText value={manufactureYear} setValue={setManufactureYear} label={"Год мануфактуры"}/>
                <InputText value={reviewText} setValue={setReviewText} label={"Ваш отзыв"}/>
                <InputText value={pros} setValue={setPros} label={"Плюсы"}/>
                <InputText value={cons} setValue={setCons} label={"Минусы"}/>
                <InputText value={advice} setValue={setAdvice} label={"Совет"}/>
                <InputText value={ownershipDate} setValue={setOwnershipDate} label={"Год покупки"}/>
                <InputText value={mileage} setValue={setMileage} label={"Пробег"}/>
                <Button width="full" mt={4} type="submit" onClick={submitHandler}>Отправить на модерацию</Button>
            </form>
        </Box>
    </Box>);
}