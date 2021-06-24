import React from 'react'

const Inicio = ({handleLogout})=> {
    return (
        <section>
            <nav>
                <button onClick={handleLogout}>
                    Logout
                </button>
            </nav>
        </section>
    )
}

export default Inicio;
