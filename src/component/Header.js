import { ReactComponent as SvgBars } from "../assets/svg/bars.svg";
import { ReactComponent as SvgTimes } from "../assets/svg/times.svg";

function Header() {
  return (
    <header className="Header">
      <input type="checkbox" id="rnbToggle" className="header__check" />
      <div className="Header__gnb">
        <a href="/" className="Header__gnb__logo">
          <h4>A.SHarea</h4>
        </a>
        <label for="rnbToggle" className="Header__gnb__bars">
          <SvgBars />
        </label>
      </div>
      <div className="Header__rnb">
        <div className="Header__rnb__head">
          <label for="rnbToggle" className="Header__rnb__bars">
            <SvgTimes />
          </label>
        </div>
        <div className="Header__rnb__body">
          <a href="#welcome" className="Header__rnb-item">
            Welcome
          </a>
          <a href="#about" className="Header__rnb-item">
            About
          </a>
          <a href="#skill" className="Header__rnb-item">
            Skill
          </a>
          <a href="#project" className="Header__rnb-item">
            Project
          </a>
          <a href="#contact" className="Header__rnb-item">
            Contact
          </a>
        </div>
      </div>
      <div className="Header__overlay"></div>
    </header>
  );
}

export default Header;
