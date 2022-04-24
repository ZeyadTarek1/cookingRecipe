import { ReactComponent as BackgroundColor } from "../../img/color.svg";
import { ReactComponent as BannerImg } from "../../img/background.svg";
import "./heroBanner.css";
const HeroBanner = () => {
    return (
        <div className="heroBanner">
            <BackgroundColor className="backgroundImage" />
            <div className="heroBannerBody">
                <BannerImg className="heroBannerImg" />
                <div className="heroBannerContent">
                    <h1>Cooking</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ipsa dicta sed aperiam, eum dolorum tenetur magnam
                        itaque voluptas cupiditate vitae. Maiores pariatur
                        blanditiis ab consectetur! Expedita doloremque porro
                        nulla est.
                    </p>
                    <div className="btnWrapper">
                        <button className="recipeBtn">Create Recipe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;
