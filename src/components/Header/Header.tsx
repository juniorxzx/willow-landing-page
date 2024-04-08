'use client'
import React, { useEffect, useState } from 'react'
import { MenuMobile, Head, Links, Logo, Menu, Nav, Icon, Title } from './Header.styled'
import Link from 'next/link'

const Header = () => {
    const [color, setColor] = useState(false);
    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
        const checkHeight = () => {
            if (window.scrollY >= 40) {
                setColor(true)
            } else {
                setColor(false)
            }
        }
        window.addEventListener('scroll', checkHeight);
        return () => {
            window.removeEventListener('scroll', checkHeight);
        };

    }, [])



    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <Head $isBgColor={color}>
            <Nav>
                <Logo>
                    <Title>
                        <span>Will</span>
                        <span>ow</span>
                    </Title>
                </Logo>
                <Menu>
                    <Links>
                        <li>
                            <Link href={'/'}>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                Testimonials
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                Contact
                            </Link>
                        </li>

                    </Links>
                </Menu>

                <MenuMobile $isOpen={isOpen}>
                    <Icon onClick={toggleMenu} $isOpen={isOpen}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </Icon>

                    <div className='linksMobile'  >

                        <li>
                            <Link href={'/'}>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                Testimonials
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                Contact
                            </Link>
                        </li>

                    </div>
                </MenuMobile>
            </Nav>
        </Head>
    )
}

export default Header