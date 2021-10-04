import React, { useState, useEffect } from 'react';

/*  =============== StoreContext
Component that uses Context React API.
This component provides a global store for the application.
to make status updates more efficient than just using props
It's quite similar to redux functionality
*/

export const Store = React.createContext();

const StoreContext = (props) => {
    const [user, setUser] = useState([]);

    return (
        <Store.Provider value={{ user, setUser }}>
            {props.children}
        </Store.Provider>
    );
};

export default StoreContext;
