import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import "./Teachers.css"

const Teachers = (props) => {
    const { name, position, faculty, email, salary, img } = props.teacher
    const element = <FontAwesomeIcon icon={faCoffee} />
    return (
        <div className="card-style">
            <img src={img} alt="" />
            {/*   <p>Name: <small>{name}</small>     </p> */}
            <p>Name: {name}   </p>
            <p>Position:  {position}     </p>
            <p>Faculty:  {faculty}     </p>
            <p>Email:  {email}     </p>
            <p>Salary:  {salary}     </p>

            <button className = "btn-style" onClick= {() => props.handleBtn(props.teacher)}><i class="fas fa-check"></i> Select</button>

        </div>
    );
};

export default Teachers;