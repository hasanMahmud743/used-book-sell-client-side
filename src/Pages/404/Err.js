import React from 'react';
import useTitle from '../../Hooks/UseTitle';

const Err = () => {
    useTitle('Error page')
    return (
        <div className='border text-center'>
            <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-page-templates.jpg" alt="404" />
            
        </div>
    );
};

export default Err