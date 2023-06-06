import InstaIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { grey } from "@mui/material/colors";

import "./Footer.css";
function Footer() {
  return (
    <footer id="footer">
      <div className="footer-links">
        <a
          href="https://www.instagram.com/priyansh3731/"
          rel="noreferrer"
          target="_blank"
        >
          <InstaIcon fontSize="large" sx={{ color: grey[500] }} />
        </a>
        <a
          href="https://github.com/priyansh3731"
          rel="noreferrer"
          target="_blank"
        >
          <GitHubIcon fontSize="large" sx={{ color: grey[500] }} />
        </a>
        <a
          href="https://www.linkedin.com/in/priyanshu-fulwari-b018031b8/"
          rel="noreferrer"
          target="_blank"
        >
          <LinkedInIcon fontSize="large" sx={{ color: grey[500] }} />
        </a>
      </div>
      <div className="footer-text">© No Copyright, Feel free to replicate.</div>
    </footer>
  );
}

export default Footer;