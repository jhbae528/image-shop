import React from "react";
//import MainHeader from "../components/common/MainHeader";
import MenuBarContainer from "../containers/common/MenuBarContainer";
import Footer from "../components/common/Footer";
import MainHeaderContainer from "../containers/common/MainHeaderContainer";

function MainLayout({ children }) {
    return (
        <div align="center">
            <MainHeaderContainer />
            <MenuBarContainer />
            { children }
            <Footer />
        </div>
    );
}

export default MainLayout;