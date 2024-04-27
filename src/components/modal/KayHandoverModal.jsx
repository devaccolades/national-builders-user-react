import React, { useEffect } from "react";
import {
    Dialog,

} from "@material-tailwind/react";
import { IoMdClose } from "react-icons/io";
import styled from "styled-components";

export function KayHandoverModal({ open, handleOpen, data }) {
    return (
        <>
            <Dialog size="lg" open={open} handler={handleOpen} className="bg-transparent h-screen flex overflow-y-hidden justify-center items-center">
                <Button className="bg-white p-2 rounded-full" onClick={handleOpen}>
                    <IoMdClose className="text-black w-6 h-6"/>
                </Button>
                <img src={data.image} className="lg:h-full " alt="" />
            </Dialog>
        </>
    );
}

const Button = styled.button`
    position: absolute;
    top: 1%;
    right: 3%;
    @media(max-width:768px){
    top: 7%;
    right: 1%;
    }
    @media(max-width:425px){
    top: 21%;
    }
    @media(max-width:320px){
    top: 27%;
}
`