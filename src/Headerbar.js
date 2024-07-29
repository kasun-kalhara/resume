import "./Headerbar.css";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

function Headerbar() {
  return (
    <div className="headerbar-main">
      <div className="headerbar">
        <div>
          <a href="#">Home</a>
          <a href="#aboutMe">About me</a>
        </div>
        
      </div>
    </div>
  );
}

export default Headerbar;
