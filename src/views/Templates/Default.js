import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

export default function Default(props) {
    return (
        <>
            <Nav />
            {props.children}
            <Footer />
        </>
    );
}