import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../library/image/logo.svg";

const NavBar = () => {

    const onSearch = () => {
        setSearch(document.querySelector('#saad-input').value)
    }





    return (<>
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
                <div className="container-lg">
                    <Link className="navbar-brand" to="/"><img src={Logo} width="150" alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav ms-auto d-flex align-items-center">
                            <TextField style={{ minWidth: '55vw' }} id="saad-input" label="Search product" variant="outlined" size="small" />
                           
                            <i style={{ fontSize: '30px', marginLeft: '10px', color: "rgb(140, 72, 210)" }} class="fa-duotone fa-cart-shopping"></i>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    </>
    );
};

export default NavBar;