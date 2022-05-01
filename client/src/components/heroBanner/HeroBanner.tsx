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
        <Herobanner>
            <HeroBannerBody>
                <BannerImg className="bannerImg" />
                <HeroBannerContent>
                    <h1>Tasty </h1>
                    <p>
                        Feeling hungry? Looking for something new? <br /> Look
                        no further! Here you can find the recipes of different
                        cuisines from all around the world!
                        <br /> Or even better - you can create your own recipe
                        to share with the world!
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
