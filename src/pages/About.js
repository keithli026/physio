import { Outlet } from "react-router-dom";
function About() {
    return (
        <>
            <h1>About Us</h1>
            <Outlet />
        </>
    );
}

export default About;