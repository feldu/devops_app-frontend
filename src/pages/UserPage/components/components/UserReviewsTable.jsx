import React, {useMemo} from "react";
import TableWithPagination from "../../../../components/TableWithPagination";

export default function UserReviewsTable({reviewList}) {
    const reviewData = useMemo(() =>
        reviewList.map(r => ({
            id: r.id,
            modification: r.modification,
            carModel: r.carModel,
            reviewText: r.reviewText,
            mileage: r.mileage,
            advice: r.advice,
            approved: r.approved ? 'Да' : 'Нет',
        })), [reviewList]);

    const columns = useMemo(() => [
        {
            Header: 'Отзыв', columns: [
                {Header: '№', accessor: 'id'},
                {Header: 'Модификация', accessor: 'modification'},
                {Header: 'Модель', accessor: 'carModel'},
                {Header: 'Отзыв', accessor: 'reviewText'},
                {Header: 'Пробег', accessor: 'mileage'},
                {Header: 'Совет', accessor: 'advice'},
                {Header: 'Опубликован', accessor: 'approved'},
            ]
        },
    ], []);

    return (
        <TableWithPagination columns={columns} data={reviewData}/>
    );
}