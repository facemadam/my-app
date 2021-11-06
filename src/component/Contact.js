import { ReactComponent as SvgEmail } from "../assets/svg/email.svg";

function Contact() {
  return (
    <div className="Main__contact" id="contact">
      <h2>Contact</h2>
      <div className="Main__card">
        <div className="Main__board">
          <div className="Main__board__content">
            <div className="Main__board__content-wrap">
              <div className="Main__board__content-icon">
                <SvgEmail />
              </div>
              <div className="Main__board__content-body">
                <div className="Main__board__content-info">
                  <b>이메일</b>
                </div>
                <div className="Main__board__content-info">
                  <small>tngus6047@gmail.com</small>
                </div>
              </div>
            </div>
            <a href="#" className="Main__board__content-button Mbcb__red">
              Send
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
