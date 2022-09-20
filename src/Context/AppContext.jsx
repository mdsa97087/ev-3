import {createContext,useState} from "react"

const AppContext = createContext()

function AppContextProvider({children}) {

    const [authState,setState] = useState({isAuth:false,token:null})

    const logIn = (token) => {
        setState({isAuth:true,token:token})
    }

    const logOut = ()=> {
        setState({isAuth:false,token:null})
    }

    return <AppContext.Provider value={{authState,logIn,logOut}}>
      {children}   
    </AppContext.Provider>


}
export {AppContext}
export default AppContextProvider;
