import React, { useState } from 'react';
import styled from 'styled-components';
import Basic from '../images/dane-wetton-t1NEMSm1rgI-unsplash.jpg';
import Flexible from '../images/katie-bush-FqJQvAzcH6Y-unsplash.jpg';
import Grow from '../images/avrielle-suleiman-GpVak9-cL6E-unsplash.jpg';
// import Leftarrow from '../images/left-arrow.png';
// import Rightarrow from '../images/right-arrow.png';

const items = [
  { image: Flexible, header: 'BE FLEXIBLE', access: 'PAY WHEN YOU PRACTICE', price: '2499 SEK/PER MONTH' },
  { image: Basic, header: 'BASIC', access: 'ACCESS ALL OUR IN-STUDIO CLASSES', price: '899 SEK/PER MONTH' },
  { image: Grow, header: 'GROW', access: 'ACCESS ALL OUR IN-STUDIO AND ONLINE CLASSES', price: '1899 SEK/PER MONTH' }
];

const MemberShipContainer = styled.div`
  width: 100vw;
  height: auto;
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #EBEBEB;
  position: relative;
`;

const SliderItemContainer = styled.div`
  width: 288.54px;
  height: 427.34px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2.52369px solid #025323;
  border-radius: 16.8246px;
  margin-bottom: 46px;
`;

const Title = styled.h1`
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  color: #025323;
  margin-top: 46px;
  padding: 0 10px;
`;

const Content = styled.p`
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 167.5%;
  text-align: center;
  color: #025323;
  padding: 0 50px;
`;
export const Image = styled.img`
  width: 288.54px;
  height: 201.05px;
  object-fit: cover;
  border-radius: 16.8246px;
`;
const Wrapper = styled.div`
  align-items: left;
  width: 288.54px;
  padding-left: 16px;
  margin-bottom: 25px;
`
const Header = styled.h2`
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 600;
  font-size: 18.5071px;
  line-height: 22px;
  color: #025323;
`;
const Access = styled.p`
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 500;
  font-size: 9.25353px;
  line-height: 11px;
  color: #025323;
  margin:0px;
`;
const Price = styled.p`
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 500;
  font-size: 12.2091px;
  line-height: 15px;
  color: #000000;
  margin-right: 10px;
`;
const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 47px;
  background: #025323;
  border-radius: 15px;
  text-align: center;
  color: #FFFFFF;
`;

const ArrowButtonLeft = styled.button`
  height: 19.28px;
  width: 19.28px;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  position:absolute;
  top: 60%;
  left: 15px;
`;

const ArrowButtonRight = styled.button`
  height: 19.28px;
  width: 19.28px;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  position:absolute;
  top: 60%;
  right: 15px;
`;

export const Membership = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <MemberShipContainer>
      <Title>Sign up for membership</Title>
      <Content>Most classes are 30 minutes and several of them can been taken online</Content>

      <SliderItemContainer>
        <Image src={items[currentIndex].image} alt="carousel item" />

        <Wrapper>
          <Header>{items[currentIndex].header}</Header>
          <Access>{items[currentIndex].access}</Access>
        </Wrapper>

        <Price>{items[currentIndex].price}</Price>
        <Button type="button">Buy Now</Button>
      </SliderItemContainer>

      <ArrowButtonLeft onClick={handlePrevClick}>
        <span> {'<'} </span>
      </ArrowButtonLeft>
      <ArrowButtonRight onClick={handleNextClick}>
        <span> {'>'} </span>
      </ArrowButtonRight>
    </MemberShipContainer>
  );
};