import { useState , createContext, useContext } from "react";

const UserContext =createContext();

const initialcart_item={
    books:0,
    price:0,
    book_list:[]
}
const UserProvider =({children})=>{
    const [userLogin, setUserLogin] = useState(false);
    const [cartitem,setCartitem]=useState(initialcart_item);
    const value={
        userLogin,
        setUserLogin,
        cartitem,
        setCartitem,    
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