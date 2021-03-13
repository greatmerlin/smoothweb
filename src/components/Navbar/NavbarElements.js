import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

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

color: #3399ff;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5em;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;

`

export const MobileIcon = styled.div`

display: none;

@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
}

`

// FaBars is an Icon that we will import

export const NavMenu = styled.ul`

display: flex;
align-items: center;
list-style: none;
text-aligh: center;
margin-right: -22px;

@media screen and (max-width: 768px) {
    display: none;
}

`

export const NavItem = styled.li`

heigth: 80px;

`

// border bottom is for the highlighting on the bottom of each item 
// when the cursor is there

export const NavLinks = styled(LinkS)`

color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%
cursor: pointer;

&.active {
    border-bottom: 3px solid #3399ff;
}

`

export const NavBtn = styled.nav`

display: flex;
align-items: center;

@media screen and (max-width: 768px) {
    display: none;
}

`

// border-radius -> make it round

export const NavBtnLink = styled(LinkR)`

border-radius: 50px;
background: #3399ff;
white-space: nowrap;
padding: 10px 22px;
color: #010606;
font-size: 16px;
align:none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&.hover {
    transition: all 0.2s ease-in-out;;
    background: #fff;
    color: #010606;
}

`