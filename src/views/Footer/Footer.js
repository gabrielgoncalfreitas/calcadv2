import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer class="text-center fixed-bottom m-0 py-2 border-top">
            <div class="text-center">
                <div>
                    Made by: Gabriel G. Freitas

                    <Link className="ms-1" to="https://github.com/gabrielgoncalfreitas">
                        (GitHub)
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
