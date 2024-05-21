import React from "react";
import { styled } from "styled-components";
import noDataImg from "../../assets/images/common/folder.png";
import { motion } from "framer-motion";
function NoDataFound({text}) {
  return (
    <Container className="flex flex-col">
      <Img>
        <motion.img className="cursor-pointer" whileHover={{ scale: 1.1 }} src={noDataImg} alt="no-data" />
      </Img>
      <p>{text} </p>

    </Container>
  );
}

export default NoDataFound;

const Img = styled.div`
  width: 35%;
  margin: 0 auto;
  img {
    width: 100%;
    display: block;
  }
`;
const Container = styled.div`
  /* height: 600px; */
  /* margin-top: 150px; */
  display: flex;
  justify-content: center;
  align-items: center;
  p{
    opacity: 55%;
    font-size: 20px;
    font-family: 'popins_regular';
  }
`;
