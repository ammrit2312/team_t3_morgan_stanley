import React from "react";

import { useParams } from 'react-router-dom';

const TestPage = () => {
    let { id } = useParams();
    return (
        <div>
            <h1>This is the test page</h1>
            {id}
        </div>
    );
}
 
export default TestPage;