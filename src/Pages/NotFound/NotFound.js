import React from 'react';
import notFound from '../../images/notfound.jpg';
const NotFound = () => {
    return (
        <div style={{ margin: 'auto', textAlign: 'center' }}>
            <img style={{ maxWidth: '100%', width: '50%', margin: 'auto' }} src={notFound} alt="" />
        </div>
    );
};

export default NotFound;