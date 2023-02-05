import { Link } from "react-router-dom";

export default function About() {
    return (
        <div>
            <Link to={'/'}>
                <h1 className="text-white">About!</h1>
            </Link>
        </div>
    );
}