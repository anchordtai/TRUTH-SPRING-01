import { createContext } from 'react'
import netlifyIdentity from 'netlify-identity-widget'

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false
})

export const AuthContextProvider = ({children}) =>{
  const {user, setUser} =useState(null)
  useEffect(()=> {
    //init netlify identity
    netlifyIdentity.init()
  },{})
  const login =() =>{
    netlifyIdentity.open()
  }
  const context = { user, login}
  return (
    <AuthContext.Provider value="user">
    {children}
  </AuthContext.Provider>
  )
}

export default AuthContext