import Link from "next/link";
import styled from "styled-components";


export const Main = styled.main`
    width: 100%;
`

// hero
export const Hero = styled.section`
 
    width: 100%;
    display: flex;
    padding-top: 70px;
    padding-bottom:  40px;
    
    color: ${({ theme }) => theme.colors.text} ;

       // Exemplo de estilo para smartphones em paisagem
    @media screen and (min-width: 768px) {
        padding: 0;
        flex-direction: row;
        align-items: center;
        height: 100vh;
    }



`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;    
    padding: 0 3rem;

 
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 1rem;
    padding: 0 3rem;
    @media screen and (min-width: 768px) {
         align-items: flex-start;
    }
  
`

export const BoxImages = styled.div`
    display: none;
    padding: 0 3rem;
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 10;

    &> img:nth-child(1){
        position: absolute;
        bottom: 20px;
        border-radius: 12px;
        object-fit: cover;

    }
    &> img:nth-child(2){
        position: absolute;
        top: 15%;
        right: 10%;
        border-radius: 12px;
        object-fit: cover;
    }


    @media screen and (min-width: 768px) {
       display: flex;
       gap:1rem;
    }
`

export const Title = styled.div`

    font-size: clamp(30px, 55px, 70px);
    font-weight: 800;
    text-transform: uppercase;
    & >:nth-child(1){
        color: ${({ theme }) => theme.colors.secondary};
    }
    & >:nth-child(2){
        color: ${({ theme }) => theme.colors.primary};
    }
`

export const SubTitle = styled.div`
    font-size: clamp(20px, 26px, 32px);
    display: flex;
    width: 100%;
    text-align: justify;

    @media screen and (min-width: 768px) {
        width: 100%;
    }
    

`

export const Button = styled.button`

    margin-top: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    border: none;
    cursor: pointer;
    border-radius: 12px;

    color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme }) => theme.colors.primary};

    transition: ease-in-out 300ms;
    &:hover{
        transform: translateY(5px);
    }
`


//about

export const About = styled.section`
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    width: 100%;
    display: flex;
    padding: 4rem 0;
    background-color: ${({ theme }) => theme.colors.section};
    color: ${({ theme }) => theme.colors.text} ;

    .text-about{
        margin-top: 2rem;
    }

    .cards{
        width: 100%;
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .card{
      
            border-radius: 20px;
            box-shadow: 0 0 10px rgba(0,0,0,.2);
            background-color: ${({ theme }) => theme.colors.background};
            height: 250px;
            width: 100%;

            .c-content{
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                padding: 1rem;
            }
        }
    }

    @media screen and (min-width: 768px) {
        .cards{
        flex-direction: row;
        }
    }
`

export const SectionTitle = styled.div`
    width: 100%;
    padding: 0.2rem ;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({ theme }) => theme.colors.accent};
    height: 30px;
    text-transform: uppercase;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.accent} ;

    @media screen and (min-width: 768px) {
     width: fit-content;
    }
`

// testimonials
export const Testimonials = styled.section`
    width: 100%;
    display: flex;
    padding: 4rem 0;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text} ;
    overflow-x: hidden;
    
    .text-about{
        margin-top: 2rem;
    }

`

export const TestimonialsCards = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border-radius: 12px;
    .card-header{
        display: flex;
        color: ${({ theme }) => theme.colors.primary};
        .user-details{
            display: flex;
            flex-direction: column;

            &> span:nth-child(1){
                font-weight: 700;
                font-size: clamp(16px, 18px, 20px);
            }
            &> span:nth-child(2){
                font-size: clamp(12px, 14px, 16px);
            }
        }
    }

`


// contact
export const Contact = styled.section`
    width: 100%;
    display: flex;
    padding: 4rem 0;
    background-color: ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.text} ;
    overflow-x: hidden;
    
    .text-about{
        margin: 2rem 0; 
        display: flex;
        width: 100%;
        text-align: center;
        align-items: center;
        flex-direction: column;
        gap: 0.5rem;
        justify-content: center;
        color: ${({ theme }) => theme.colors.secondary};
        text-transform: uppercase;
        font-weight: 800;
    }
`


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;

`

export const Fieldset = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    position: relative;
    display: inline-block;
    width: 100%;
`

export const Label = styled.label <{ $isFloating?: boolean }>`
    position: absolute;
    left: 0.2rem;
    top: ${({ $isFloating }) => ($isFloating ? '-1.6rem' : '0.5rem')};
    transition: top 0.3s ease, font-size 0.3s ease;
    font-size: ${({ $isFloating }) => ($isFloating ? '1.5rem' : '1rem')};
    color: ${({ theme }) => theme.colors.secondary};

`

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 24px;
  padding: 0.5rem 0.2rem;
  color: ${({ theme }) => theme.colors.text};
  border: none;
  outline: none;
  border-radius: 12px;
  box-shadow: 0 0 1px rgba(0,0,0.2);

`

export const Socials = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2rem;
    gap: 1rem;
    width: 100%;
    justify-content: center;
    

`

export const LinkStyled = styled(Link)`
    display: flex;
    align-items: center;
    flex-direction: column;
   
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.background};

    &:hover{
        color: ${({ theme }) => theme.colors.secondary}; 
    }

`