import React from "react";
import MainHeader from "../components/common/MainHeader";
import MenuBar from "../components/common/MenuBar";
import Footer from "../components/common/Footer";
import MainHeaderContainer from "../containers/common/MainHeaderContainer";

function MainLayout({ children }) {
    return (
        <div align="center">
            <MainHeaderContainer />
            <MenuBar />
            { children }
            <Footer />
        </div>
    );
}

export default MainLayout;