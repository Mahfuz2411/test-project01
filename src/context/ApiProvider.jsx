import PropTypes from 'prop-types';
import { createContext } from "react";

export const UserContext = createContext(null);

const ApiProvider = ({children}) => {
    
    return (
        <UserContext.Provider value={"abcdefg"}>
            {children}
        </UserContext.Provider>
    );
};

ApiProvider.propTypes = {
    children: PropTypes.node
}

export default ApiProvider;