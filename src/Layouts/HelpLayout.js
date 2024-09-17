import { Outlet, NavLink } from "react-router-dom";

export default function HelpLayout() {
    return(
        <div className="help-layout">

            <h2>website Help</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolor assumenda,
            itaque nesciunt alias voluptatum nobis blanditiis eos</p>
            
            <nav>
                <NavLink to="Faq">View the FAQ</NavLink>
                <NavLink to="Contact">Contact Us</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}