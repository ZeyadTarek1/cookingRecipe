import { useNavigate } from "react-router";
import "./Footer.css";
import { ReactComponent as FacebookImg } from "../../img/facebook.svg";
import { ReactComponent as TwitterImg } from "../../img/twitter.svg";
import { ReactComponent as GithubImg } from "../../img/github.svg";

const Footer = () => {
    let navigate = useNavigate();

    return (
        <footer className="footer">
            <div className="socials">
                <FacebookImg className="socialImg" />
                <TwitterImg className="socialImg" />
                <GithubImg className="socialImg" />
            </div>

            <div className="footerNavigation">
                <p className="footerText">Home</p>
                <p>·</p>
                <p className="footerText">Create Recipe</p>
                <p>·</p>
                <p className="footerText">About</p>
                <p>·</p>
                <p className="footerText">Contact</p>
            </div>

            <div className="copywrite">
                <p>© 2022 Zeyad Tarek</p>
            </div>
        </footer>
    );
};

export default Footer;
