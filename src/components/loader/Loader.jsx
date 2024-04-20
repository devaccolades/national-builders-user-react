import styled from 'styled-components';
import React from 'react';

import logo from '../../assets/images/logo/national-builders-logo.svg';

function Loader({status}) {
  return (
    <LoaderDiv className={`loader ${!status && 'close'}`}>
        <LoaderIcon>
            <Img src={logo} />
        </LoaderIcon>
    </LoaderDiv>
  )
};

export default Loader;

const LoaderDiv = styled.div`
      position: fixed;
      width:100vw;
      height:100vh;
      background-color:black;
      display: flex;
      align-items: center;
      justify-content:center;
      inset:0;
      z-index:250001;

      &.close{
        display:none;
      }
`;

const LoaderIcon = styled.div`
      width:200px;
`;

const Img = styled.img`
    width:100%;
    height:auto;
    display: block;
    animation : loading 2s infinite;

      @keyframes loading {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
      }
`;
