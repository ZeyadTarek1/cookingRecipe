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
                <FacebookImg
                    className="socialImg"
                    onClick={() =>
                        window.open("https://facebook.com", "_blank")
                    }
                />
                <TwitterImg
                    className="socialImg"
                    onClick={() => window.open("https://twitter.com", "_blank")}
                />
                <GithubImg
                    className="socialImg"
                    onClick={() =>
                        window.open(
                            "https://github.com/ZeyadTarek1/cookingRecipe",
                            "_blank"
                        )
                    }
                />
            </div>

            <div className="footerNavigation">
                <p className="footerText" onClick={() => navigate("/")}>
                    Home
                </p>
                <p>·</p>
                <p
                    className="footerText"
                    onClick={() => navigate("/create-recipe")}
                >
                    Create Recipe
                </p>
                <p>·</p>
                <p className="footerText" onClick={() => navigate("/about")}>
                    About
                </p>
                <p>·</p>
                <p
                    className="footerText"
                    onClick={() =>
                        window.open(
                            "https://github.com/ZeyadTarek1/cookingRecipe",
                            "_blank"
                        )
                    }
                >
                    Contact
                </p>
            </div>

            <div className="copywrite">
                <p>© 2022 Zeyad Tarek</p>
            </div>
        </footer>
    );
};

export default Footer;
