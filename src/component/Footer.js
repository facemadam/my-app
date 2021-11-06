import { ReactComponent as SvgGithub } from "../assets/svg/github.svg";
import { ReactComponent as SvgFacebook } from "../assets/svg/facebook.svg";
import { ReactComponent as SvgInstagram } from "../assets/svg/instagram.svg";

function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer__icons">
        <div className="Footer__icons">
          <a href="https://github.com/facemadam" className="Footer__icons-item">
            <SvgGithub />
          </a>
          <a
            href="https://www.facebook.com/facemadam"
            className="Footer__icons-item"
          >
            <SvgFacebook />
          </a>
          <a
            href="https://www.instagram.com/suhyeon2005/"
            className="Footer__icons-item"
          >
            <SvgInstagram />
          </a>
        </div>
      </div>
      <div className="Footer__copyright">
        <div>@ 2021 SuHyun An.</div>
        <div>
          <small>ALL RIGHTES RESERVED.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
