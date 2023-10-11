import PropTypes from 'prop-types';
import { createContext } from "react";

const UserContext = createContext(null);

const Provider = ({children}) => {
    
    return (
        <UserContext.Provider value={"value"}>
            {children}
        </UserContext.Provider>
    );
};

Provider.propTypes = {
    children: PropTypes.node
}

export default Provider;