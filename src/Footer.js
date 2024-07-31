import "./Footer.css";

import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import { GitHub } from "@mui/icons-material";

function Footer() {
  return (
    <div className="footer-main" >
      <div className="footer-main-flex">
        <div className="footer-main-icons">
          <a href="https://www.linkedin.com/in/kasun-bamunuarachchi-4516b31b1/">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/kasun-kalhara">
            <GitHub />
          </a>
          <a href="https://m.facebook.com/profile.php?id=100085722746052&name=xhp_nt__fb__action__open_user">
            <FacebookIcon />
          </a>
          <a href="mailto:kasunkalhara588@gmail.com">
            <EmailIcon />
          </a>
          <a href="https://wa.me/+94705146953">
            <WhatsAppIcon />
          </a>
        </div>
        <span id="footer-main-span">
          Copyright © 2023 | All Rights Reserved
        </span>
        <span>Thanks for Visit</span>
      </div>
    </div>
  );
}

export default Footer;
