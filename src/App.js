import React from "react";
import "./App.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { GitHub } from "@mui/icons-material";

function App() {
  const [text] = useTypewriter({
    words: [
      "Engineering Undergraduate",
      "Web Developer",
      "Devops",
      "CloudOps Engineer",
      "ITOps",
    ],
    loop: {},
  });

  return (
    <div className="App">
      <span className="App-name">
        <span>K</span>
        <span>A</span>
        <span>S</span>
        <span>U</span>
        <span>N</span>
        
        <span> </span>
        <span>B</span>
        <span>A</span>
        <span>M</span>
        <span>U</span>
        <span>N</span>
        <span>U</span>
        <span>A</span>
        <span>R</span>
        <span>A</span>
        <span>C</span>
        <span>H</span>
        <span>C</span>
        <span>H</span>
        <span>I</span>
        
      </span>
      <div className="App-hash">
        <span className="App-hash01"># </span>
        <span className="App-hash02">{text}</span>
        <span>
          <Cursor />
        </span>
      </div>
      <div className="App-iconbar">
        <a href="https://www.linkedin.com/in/kasun-bamunuarachchi-4516b31b1/">
          <LinkedInIcon className="App-iconbar-icons" />
        </a>
        <a href="https://github.com/kasun-kalhara">
          <GitHub className="App-iconbar-icons" />
        </a>
        <a href="https://m.facebook.com/profile.php?id=100085722746052&name=xhp_nt__fb__action__open_user">
          <FacebookIcon className="App-iconbar-icons" />
        </a>
        <a href="mailto:kasunkalhara588@gmail.com">
          <EmailIcon className="App-iconbar-icons" />
        </a>
        <a href="https://wa.me/+94705146953">
          <WhatsAppIcon className="App-iconbar-icons" />
        </a>
      </div>
      <a className="App-scroll" href="#aboutMe">
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>
  );
}

export default App;
