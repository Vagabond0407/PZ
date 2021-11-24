import { Drawer } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Header from "../../containers/Header/Header";
import Nav from "../../containers/Nav/Nav";
import { useAuth } from "../../hooks/login-hook";

const Admin = () => {
    useAuth();

    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = (isOpen) => {
        setIsOpen(() => isOpen);
    }
    return (
        <>
            <Header isOpen={isOpen} menuButtonClicked={() => toggleDrawer(!isOpen)} />
            <Drawer open={isOpen}
                    onClose={() => toggleDrawer(false)}>
                <Nav navLinkClicked={() => toggleDrawer(false)}/>
            </Drawer>
            <main>
                <Outlet></Outlet>
            </main> 
        </>
    );
};

export default Admin;