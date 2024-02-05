'use client'    
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "./whatsapp-animation.json";
import DialogBox from "./DialogBox";

function loadAnimation(){
    const animation = lottie.loadAnimation({
        container: document.getElementById("animationContainer") as HTMLDivElement,
        animationData: animationData,
        loop: true,
        autoplay: true,
    });
    console.log('animation', animation);
}

export const WhatsappAnimation = () => {
    const animationRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        loadAnimation();
        return () => {
            lottie.destroy();
        };
    }, []);
    return (
        <div
            id="animationContainer"
            ref={animationRef}
        >
        </div>
    );
};

