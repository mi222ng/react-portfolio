import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll'


const HeaderArea = styled.div`
    position: relative;
    width: 100%;
    padding: 54px 0;
`;

const HeaderWrap = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    z-index: 1;
    left:0;
    width: 100%;
    height: 80px;
    transition: 0.4s ease;
    &.hide {
        transform: translateY(-135px);
    }
`;

const throttle = function (callback, waitTime) {
    let timerId = null;
    return (e) => {
        if (timerId) return;
        timerId = setTimeout(() => {
            callback.call(this, e);
            timerId = null;
        }, waitTime);
    };
};

const Nav = () => {
    const [hide, setHide] = useState(false);
    const [pageY, setPageY] = useState(0);
    const documentRef = useRef(document);

    const handleScroll = () => {
        const { pageYOffset } = window;
        const deltaY = pageYOffset - pageY;
        const hide = pageYOffset !== 0 && deltaY >= 0;
        setHide(hide);
        setPageY(pageYOffset);
    };

    const throttleScroll = throttle(handleScroll, 100);

    useEffect(() => {
        documentRef.current.addEventListener('scroll', throttleScroll);
        return () => documentRef.current.removeEventListener('scroll', throttleScroll);
    }, [pageY]);

    return (
        <HeaderArea>
            <HeaderWrap className={hide && 'hide'}>
                <nav className='cont d-flex'>
                  <ul>
                      <li><Link to="about" spy={true}>About</Link></li>
                      <li><Link to="skills" spy={true}>Skills</Link></li>
                      <li><Link to="works" spy={true}>Works</Link></li>
                      <li><Link to="contact" spy={true}>Contact</Link></li>
                  </ul>
                </nav>
            </HeaderWrap>
        </HeaderArea>
    );
};


export default Nav;