import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/rana-kabiraj-991495167/"
                target="_blank"
                data-cursor="disable"
              >
                LinkedIn Profile
              </a>
            </p>
            <h4>Education</h4>
            <p>B.Tech in Electronics & Communications Engineering</p>
            <h4>Certifications</h4>
            <p>Google Generative AI Leader • Oracle AI Vector Search</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Rakabi007"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/rana-kabiraj-991495167/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://x.com/RanaKabiraj"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              X (Twitter) <MdArrowOutward />
            </a>
            <a
              href="mailto:ranakabiraj@gmail.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Customized & Built <br /> by <span>Rana Kabiraj</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
