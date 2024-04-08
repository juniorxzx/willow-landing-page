import styled from "styled-components";

export const Head = styled.header <{ $isBgColor?: boolean }>`
    display: flex;
    position: fixed;
    height: 60px;
    width: 100%;
    left: 0;
    top: 0;
    background-color: ${props => props.$isBgColor ? ({ theme }) => theme.colors.accent : 'transparent'};
    transition: background-color 0.3s ease-in-out;
    z-index: 10000;
`
export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 3rem;
    width: 100%;

    position: relative;

`

export const Logo = styled.div`
    font-weight: 800;
    font-size: clamp(20px, 26px, 32px);
    text-transform: uppercase;
    user-select: none;
    cursor: pointer;
`

export const Title = styled.div`
    & >:nth-child(1){
        color: ${({ theme }) => theme.colors.secondary};
    }
    & >:nth-child(2){
        color: ${({ theme }) => theme.colors.primary};
    }
`

export const Menu = styled.div`
    display: none;
    width: 100%;
    justify-content: flex-end;
    align-items: center;

    // Exemplo de estilo para smartphones em paisagem
    @media screen and (min-width: 768px) {
     display: flex;
    }

`

export const Links = styled.ul`
    display: none;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    width: 100%;
    gap: 2rem;
    color: ${({ theme }) => theme.colors.secondary};

    & > :hover{
        transition: ease-in-out 300ms;
        color: ${({ theme }) => theme.colors.secondary};
        transform: scale(1.1);
    }

    @media screen and (min-width: 768px) {
     display: flex;
    }
`

export const MenuMobile = styled.div <{ $isOpen?: boolean; }>`
   
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 768px) {
        display: none;
    }
    .linksMobile{
        position: absolute;
        width: 100%;
        height: 100vh;
        right: 0;
        top: 0;
        z-index: 900;
        background-color: ${({ theme }) => theme.colors.background};


        display: ${props => props.$isOpen === true ? 'flex' : 'none'};
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
    }

    
`

export const Icon = styled.div <{ $isOpen?: boolean; }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20px;
    height: 20px;
    gap: 0.3rem;
    padding: 0.3rem;
    position: absolute;
    right: 46px;
    top: 15px;
    z-index: 1000;

    span{
        display: flex;
        width: 20px;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.secondary};
        position:  ${props => props.$isOpen === true ? 'absolute' : ''};
        transition: ease-in-out 300ms;
    }


    &> span:nth-child(1){
        transform: ${props => props.$isOpen === true ? 'rotate(45deg)' : ''};

        left: ${props => props.$isOpen === true ? '5px' : ''};
        top:  ${props => props.$isOpen === true ? '15px' : ''};
    }
    &> span:nth-child(2){
       display: ${props => props.$isOpen === true ? 'none' : ''}
    }
    &> span:nth-child(3){
        transform: ${props => props.$isOpen === true ? 'rotate(-45deg)' : ''};

        right: ${props => props.$isOpen === true ? '5px' : ''};
        top:  ${props => props.$isOpen === true ? '15px' : ''};
    }
`