import React, { useContext } from "react";
import Box from "@mui/material/Box";
import LoaderIconDark from "./icons/LoaderDark";

const Loader = () => {

    return (
        <>
            <Box
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    width: "100vw",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: 1200,
                }}
            >
                 <LoaderIconDark size="3.125rem" /> 
            </Box>
        </>
    );
};

export default Loader;
