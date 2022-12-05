import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
    return (
        <TypeAnimation
            sequence={[
                "Python Developer",
                1000,
                "Full Stack Developer",
                1000,
                "Data Analyst",
                1000,
                "Environmental Engineering Student",
                1000,
            ]}
            //  Replacing previous Text
            style={{ fontSize: "2em" }}
            wrapper="h2"
            repeat={Infinity}
        />
    );
};
export default TypingAnimation;
