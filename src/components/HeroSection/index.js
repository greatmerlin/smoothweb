import React, {useState} from "react";
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, ArrowForward, ArrowRight,   HeroBtnWrapper } from "./HeroElements";
import Video from "../../videos/video.mp4";
import { Button } from '../ButtonElement';

const HeroSection = () => {

const [hover, sethover] = useState(false);

const onHover = () => {
    sethover(!hover);
}

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
          <HeroH1>Memory UP! </HeroH1>
          <HeroP>A great memory game for you and your kids to train your brain! 🧠
              Are you also into crypto? Then try our game and meet our $MEMO token!
              We don't have a blokchain but it's still a token! 😉
          </HeroP>
          <HeroBtnWrapper>
              <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
                  Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
          </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
