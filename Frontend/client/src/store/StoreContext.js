import React, { useState, useEffect } from 'react';
import jwt from "jsonwebtoken";

/*  =============== StoreContext
Component that uses Context React API.
This component provides a global store for the application.
to make status updates more efficient than just using props
It's quite similar to redux functionality
*/

export const Store = React.createContext();

const StoreContext = (props) => {
    const [user, setUser] = useState([]);

    const load_data = () => {
        let data_token = localStorage.getItem('token-data')
        let data;
        if(data_token){
            data = jwt.verify(data_token, 'userdata')
            setUser(data)
        }

        return data;
    }

    return (
        <Store.Provider value={{ user, setUser, load_data}}>
            {props.children}
        </Store.Provider>
    );
};

export default StoreContext;
