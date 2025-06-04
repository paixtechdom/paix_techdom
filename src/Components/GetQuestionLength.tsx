import { useEffect, useState } from "react";
import { dbLocation } from "../assets/Constants";
import axios from "axios";

export const GetQuestionLength = (examKey) => {
    const [ length, setLength ] = useState(0)

    useEffect(() => {
        axios.get(`${dbLocation}/examquestions.php/${examKey.examKey}/noquestions`)
        .then((res) => {
            setLength(res.data[0].total)
        }) 
        // console.log(examKey.examKey)
    }, [])
    
    return (
        <>
            {length}
        </>
    )
}