import { useState, createContext, useContext, useEffect } from "react";
import { toast } from 'react-toastify';

const UserContext = createContext();

const initialcart_item = {
    books: 0,
    price: 0,
    book_list: []
}
const intialUserValue = {
    id: 0,
    email: "",
    firstName: "",
    lastName: "",
    roleId: 0,
    role: "",
    password: "",
};
const UserProvider = ({ children }) => {
    const [cartitem, setCartitem] = useState(initialcart_item);
    const [userLogin, setUserLogin] = useState(false);
    const [user, _setUser] = useState(intialUserValue);
    
    const setUser = (user) => {
        localStorage.setItem("User", JSON.stringify(user));
        setUserLogin(true);
        _setUser(user);
    };
    const userdelete=()=>{
        setUserLogin(false);
        localStorage.removeItem("User");
        localStorage.removeItem("Book_cart");
    }

    useEffect(() => {
        const itemStr =
          JSON.parse(localStorage.getItem("User")) ||
          intialUserValue;
        // if the item doesn't exist, return null
        if (!itemStr.id) {
            // toast.error("Plsese Login...", {
            //     position: toast.POSITION.TOP_RIGHT
            // });
        }
        _setUser(itemStr);
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    useEffect(()=>{
        const userinfo=JSON.parse(localStorage.getItem('User'));
        if(userinfo){
            setUserLogin(true);
        }
        else{
            setUserLogin(false);
        }
    },[setUserLogin])
    
    const value = {
        user,
        setUser,
        userLogin,
        userdelete,
        cartitem,
        setCartitem,
    }
    // console.log(cartitem)
    return (
        <UserContext.Provider value={value} >
            {children}
        </UserContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(UserContext);
}

export { UserProvider, useGlobalContext };