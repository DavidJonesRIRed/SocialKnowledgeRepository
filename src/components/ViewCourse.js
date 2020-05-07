import React from 'react';
import { useParams } from 'react-router-dom';

const ViewComponent = (props) =>{
    const { course } = props;
    const { id } = useParams();
    return (
        <h3>
            { course.title }
        </h3>
    );
};

export default ViewComponent;