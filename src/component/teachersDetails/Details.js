import React, { useEffect, useState } from 'react';
import SelectedTeacher from '../selectedTeachers/SelectedTeacher';
import Teachers from '../teachers/Teachers';

import "./Details.css"

const Details = () => {
    const [teachers, setTeachers] = useState([])
    const [selectTeacher, setSelectTeacher] = useState([])
    useEffect(() => {
        fetch("./teachers.json")
            .then(res => res.json())
            .then(data => setTeachers(data))
        // .then(data => console.log(data))
    }, [])

    const handleBtn = (teacher) =>{
        const newTeacher = [...selectTeacher, teacher]
        setSelectTeacher(newTeacher)
    }
    return (
        <div className = "show-details">
            <div className = "show-teachers-details">

                {
                    teachers.map(teacher => <Teachers
                        key={teacher.id}
                        teacher={teacher}
                        handleBtn = {handleBtn}></Teachers>)
                }
                
            </div>

            <div>
                <SelectedTeacher selectTeacher = {selectTeacher}></SelectedTeacher>
            </div>


        </div>
    );
};

export default Details;