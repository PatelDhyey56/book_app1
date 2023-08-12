import { useState , createContext, useContext } from "react";

const UserContext =createContext();

const UserProvider =({children})=>{
    const [userLogin, setUserLogin] = useState(false);
    // const [cartitem,setCartitem]=useState([]);
    const cartitem=[];
    const value={
        userLogin,
        setUserLogin,
        cartitem,
        // setCartitem,
    }
    // console.log(cartitem)
    return(
        <UserContext.Provider value={value} >
            {children}
        </UserContext.Provider>
    )
}

const useGlobalContext = () =>{
    return useContext(UserContext);
}

export { UserProvider , useGlobalContext};