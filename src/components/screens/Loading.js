import React from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export const Loading = () => {
    return (
        <div className='splashscreen_initial' align='center'
        >
            <Loader
                type="Hearts"
                color="rgb(0,153,235)"
                height={100}
                width={100}
                timeout={3000}
            />
        </div>
    )
}
