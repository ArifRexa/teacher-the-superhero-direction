import React from 'react';
import "./SelectedTeacher.css"

const SelectedTeacher = (props) => {
    let {selectTeacher} = props
    let salary = 0;

    for (const person of selectTeacher) {
        salary = salary + person.salary
        
        
    }
    
    return (
        <div>
            <h2>Selected Teachers Here</h2>
            <h4><i class="fas fa-user-plus"></i> Total person: {props.selectTeacher.length}</h4>
            <h4><i class="fas fa-dollar-sign"></i> Total salary: $ {salary} </h4>
            <h4><i class="fas fa-user"></i> Names:</h4>

            <ul>
                {
                    selectTeacher.map(teacher => <li key={teacher.id}>{teacher.name}</li>)
                }
            </ul>
            
        </div>
    );
};

export default SelectedTeacher;