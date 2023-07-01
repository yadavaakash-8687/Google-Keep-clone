import React from 'react'

function Footer(){

    const currentYear = new Date().getFullYear();
    return(
       <footer>
        &copy;Copyright Aakash {currentYear};
       </footer>
    )
}

export default Footer