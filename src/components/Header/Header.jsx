import React from "react";
import "./header.css";
import InfoIcon from "@mui/icons-material/Info";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import WorkIcon from "@mui/icons-material/Work";
import { Button, Select } from "@mui/material";
// import { Height } from '@mui/icons-material';

const Header = () => {
  return (
    <div className="header">
      <div className="right-div">
        <div class="dropdown">
          <button class="dropbtn">Dropdown</button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </div>
      <div className="left-div">
        <ul class="nav justify-content-space-around" className="content">
          <InfoIcon className="icon-item" />
          <li className="list-item">About</li>
        </ul>
        <ul class="nav justify-content-space-around" className="content">
          <ContactSupportIcon className="icon-item" />
          <li class="nav-item">Contact</li>
        </ul>
        <ul class="nav justify-content-space-around" className="content">
          <WorkIcon className="icon-item" />
          <li className="list-item">Experience</li>
        </ul>
        <ul class="nav justify-content-space-around" className="content-resume">
          <li className="list-item">Resume</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
