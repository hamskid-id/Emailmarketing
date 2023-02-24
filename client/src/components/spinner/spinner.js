import React from "react";
import { useState } from "react";
import BarLoader from "react-spinners/BarLoader";
import classes from "./spinner.module.css";
const Spinner = () => {
    let [color] = useState("darkslategray");

    return (
        <div className={classes.spinner_container}>
            <BarLoader
                color={color}
                size={25}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
};

export default Spinner;