'use client'

import {
  About, Box, Button,
  Card, Contact, Content,
  Fieldset, Form, Hero,
  Input, Label, Main,
  SectionTitle, SubTitle, Testimonials,
  TestimonialsCards, Title, Socials,
  LinkStyled, BoxImages
} from "./page.styled";
import { TestimonialsUser as Comments } from '@/testimonials'

import Image from "next/image";
import { useState } from "react";
import { IoLogoInstagram, IoLogoFacebook, IoLogoLinkedin } from "react-icons/io5";

import Image1 from '../assets/bg-1-hero.jpg'
import Image2 from '../assets/bg-2-hero.jpg'

export default function Home() {
  const [isFloating, setIsFloating] = useState({
    name: false,
    email: false,
    number: false,
  });

  const handleFocus = (id: string) => {
    setIsFloating((prevState) => ({
      ...prevState,
      [id]: true,
    }));
  };

  const handleBlur = (id: string, e: any) => {
    if (!e.target.value) {
      setIsFloating((prevState) => ({
        ...prevState,
        [id]: false,
      }));
    }
  };
  return (
    <Main>
      <Hero>
        <Box>
          <Title>
            <span>Will</span>
            <span>ow</span>
          </Title>

          <SubTitle>
            Ignite your creativity with Willow.
            Discover endless inspiration and tools to bring your ideas to life.
            Join us and start your creative journey today.
          </SubTitle>

          <Button>
            Explore 🌍
          </Button>
        </Box>
        <BoxImages>
          <Image src={Image1} alt="" width={300} height={300} />
          <Image src={Image2} alt="" width={300} height={300} />
        </BoxImages>
      </Hero>

      <About>
        <Content>
          <SectionTitle>
            About Us
          </SectionTitle>

          <div className="text-about">
            Willow Digital Agency drives online business success through
            innovative solutions. Our experienced team combines design, web
            development, digital marketing, and strategy to deliver tailored
            services that achieve impressive results. Committed to staying at the
            forefront of digital innovation, we ensure our clients stand out in
            an ever-evolving digital marketplace
          </div>


          <div className="cards">
            <div className="card">
              <div className="c-content">
                <h1>Improve your business</h1>
                <span>
                  We help you improve your business, bringing good results
                </span>
                <div className="">

                </div>
              </div>
            </div>
            <div className="card">
              <div className="c-content">
                <h1>Making things better</h1>
                <span>
                  Discover a new way to attract new customers
                </span>

                <Button>
                  Discover Now 🚀
                </Button>
              </div>

            </div>

          </div>
        </Content>
      </About>

      <Testimonials>
        <Content>
          <SectionTitle>
            Testimonials
          </SectionTitle>
          <TestimonialsCards>
            {Comments.map((user, index) => (
              <Card key={index}>
                <div className="card-header">
                  <div className="user-details">
                    <span>{user.name}</span>
                    <span>{user.role}</span>
                  </div>
                </div>
                <div className="card-body">
                  <span>
                    &quot;{user.comment}&quot;
                  </span>
                </div>

              </Card>
            ))}
          </TestimonialsCards>
        </Content>
      </Testimonials>

      <Contact>
        <Content>

          <div className="text-about">
            <span>Get in Touch</span>
            <span>
              <p>We are here for you. </p>
              <p>How can we help you?</p>
            </span>
          </div>
          <div>
            <Form>
              <Fieldset>
                <Label $isFloating={isFloating.name}>
                  Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  onFocus={() => handleFocus('name')}
                  onBlur={(e) => handleBlur('name', e)}
                />
              </Fieldset>
              <Fieldset>
                <Label $isFloating={isFloating.email}>
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  onFocus={() => handleFocus('email')}
                  onBlur={(e) => handleBlur('email', e)}
                />
              </Fieldset>
              <Fieldset>
                <Label $isFloating={isFloating.number}>
                  Number
                </Label>
                <Input
                  type="text"
                  id="number"
                  onFocus={() => handleFocus('number')}
                  onBlur={(e) => handleBlur('number', e)}
                />
              </Fieldset>

              <Button>
                Send
              </Button>
            </Form>

            <Socials>
              <div className="social-link">
                <LinkStyled href={'/'}>
                  <IoLogoInstagram size={24} />
                  <span>Instagram</span>
                </LinkStyled>
              </div>
              <div>
                <LinkStyled href={'/'}>
                  <IoLogoFacebook size={24} />
                  <span>Facebook</span>
                </LinkStyled>
              </div>
              <div>
                <LinkStyled href={'/'}>
                  <IoLogoLinkedin size={24} />
                  <span>Linkedin</span>
                </LinkStyled>
              </div>
            </Socials>
          </div>

        </Content>
      </Contact>

    </Main>
  );
}
