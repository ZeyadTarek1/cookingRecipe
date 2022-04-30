import { useNavigate } from "react-router";
import { ReactComponent as BannerImg } from "../../img/background.svg";
import {
    BtnWrapper,
    Herobanner,
    HeroBannerBody,
    HeroBannerContent,
} from "./heroBanner.styles";

const HeroBanner = () => {
    let navigate = useNavigate();

    const navigateCreate = () => {
        navigate("create-recipe");
    };
    return (
        <Herobanner className="heroBanner">
            <HeroBannerBody>
                <BannerImg className="heroBannerImg" />
                <HeroBannerContent>
                    <h1>Cooking</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ipsa dicta sed aperiam, eum dolorum tenetur magnam
                        itaque voluptas cupiditate vitae. Maiores pariatur
                        blanditiis ab consectetur! Expedita doloremque porro
                        nulla est.
                    </p>
                    <BtnWrapper>
                        <button className="recipeBtn" onClick={navigateCreate}>
                            Create Recipe
                        </button>
                    </BtnWrapper>
                </HeroBannerContent>
            </HeroBannerBody>
        </Herobanner>
    );
};

export default HeroBanner;
