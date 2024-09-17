import {Link} from "react-router-dom"
export default function NotFound() {
    return (
        <div>
            <h2>Page not found! </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur recusandae
            facere corporis dignissimos amet itaque eveniet quae ab atque quaerat, harum
            beatae. In, assumenda. Dolorum quam culpa obcaecati dolorem harum?
            </p>
            <p>Go to the <Link to="/">Homepage</Link>.</p>
        </div>
    )
}