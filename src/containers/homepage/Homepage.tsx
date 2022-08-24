import React, { useState } from "react";
import { NavBar } from "../../components/navbar/navbar";
import PageContainer from "../PageContainer";
import { TopSection } from "./top";


export function HomePage(){
    return <PageContainer id="top" className="rounded-br-[50%] bg-white pb-40">
        <NavBar />
        <TopSection />
    </PageContainer>
}