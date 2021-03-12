import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
//import { Link as LinkS } from 'react-scroll';

// you write here typical css
//with the media, the nav bar will trigger from 960px and above
export const Nav = styled.nav`

background: #000;
height: 80px;
/*margin-top: -80px;*/
display: flex;
justify-content: center;
align-items: center;
font-size: 1em;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 960px) {
    transition: 0.8 all ease;
}

`

export const NavbarContainer = styled.div`

display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
paddin: 0 24px;
max-width: 1100px;

`

// the logo is a link from the react router

export const NavLogo = styled(LinkR)`

colour: #fff;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5em;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;

`