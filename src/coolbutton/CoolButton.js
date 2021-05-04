import React from 'react'
import 'bulma/css/bulma.css'


function CoolButton({ children, isPrimary, isSuccess, isDanger }) {
    let myClass = 'button ';

    if (isPrimary) {
        myClass += "is-primary ";
    }

    if (isSuccess) {
        myClass += "is-success ";
    }

    if (isDanger) {
        myClass += "is-danger ";
    }
    return (
       

        <div>
            <button className={myClass}>{children}</button>
        </div>
    );
}










export default CoolButton