import { useContext, useEffect, useRef } from "react";


export const About=()=>{
    const formSubmit=()=>{
        alert("submit form..")
    }
    return(
        <>
        <h1>
            <form onSubmit={formSubmit}>
                <input type="text" placeholder="Enter name..." /><br></br><br/>
                <input type="text" placeholder="Enter email..." />
                <input type="submit"/>
            </form>
        </h1>
        </>
    );
}