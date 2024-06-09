import { useContext } from "react";
import { UserContext } from "../AuthContext/AuthContext";

const useUser = () => {
    const {user,
        googleSign,
        setLoading,
        loading,
        logOut,
        createUser,
        updateUser,
        signInUser} = useContext(UserContext)
    return (
        {
            user,
            setLoading,
        loading,
        logOut,
        createUser,
        updateUser,
        signInUser,
        googleSign
        }
    );
};

export default useUser;