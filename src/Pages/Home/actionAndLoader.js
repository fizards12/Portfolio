import { redirect } from "react-router-dom"

export const action = ({params,request})=>{
    return redirect("/about-me")
}