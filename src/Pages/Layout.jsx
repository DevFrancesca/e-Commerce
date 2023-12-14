import { Outlet } from "react-router-dom"
import Header from "../Header"
import { useContext } from "react"
import { Context } from "../context/Context"

const Layout=()=>{
    const {mode} = useContext(Context)
    return(
        <div style={mode?{backgroundColor: "white"}:{}}>
        <Header/>
        {/* outlet tells the position of the child components. It means after header is called,
        every other child components inside layout follows under it in this code. Anything can
        be called before the outlet component from react router dom. */}
        <Outlet/>
        </div>
    )
}
export default Layout