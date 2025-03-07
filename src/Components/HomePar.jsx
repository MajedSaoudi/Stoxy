import React, { useCallback,useEffect } from 'react';
import { debounce } from 'lodash';

const HomePar = React.memo(() => {
    const handleResize = useCallback(
        debounce(() => {
            
        }, 200),
        []
    );

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    return (
        <div className="Home-par">
            <h3>Discover curated fashion and home decor blending elegance with functionality. Shop our latest collections to elevate your space with timeless pieces.</h3>
        </div>
    );
});

export default HomePar;