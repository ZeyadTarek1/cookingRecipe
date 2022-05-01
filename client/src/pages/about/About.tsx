import { AboutBackground } from "./About.styles";

const About = () => {
    return (
        <AboutBackground className="AboutBackground">
            <h1>About</h1>
            <h3>
                This is a simple website where you can view, save, update and
                delete your recipes.
            </h3>
            <h3>This website has:</h3>
            <h3>A view where you can add a recipe</h3>
            <h3>A view where you can see all recipes</h3>
            <h3>A view where can see a detailed single recipe</h3>
            <h3>Click on recipe image to view details</h3>
        </AboutBackground>
    );
};

export default About;
