import React, { useEffect } from "react";
import "./Contact.css";
import download from "../Contact/download.png";
import AOS from "aos";
// import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className="contact_main_body">
        <div className="contact_headline_div">
          <h1 data-aos={"zoom-in-up"} className="contact_headline">
            LET'S HAVE A CHAT OR SPONSOR US!
          </h1>
        </div>
        <div className="contactus_seperator">
          <div
            data-aos={"fade-right"}
            data-aos-delay={"700"}
            className="contactusline1"
          ></div>
          <div className="contact_topic">
            <h1
              data-aos={"zoom-out"}
              data-aos-delay={"1200"}
              className="contactusheading"
            >
              GET IN TOUCH
            </h1>
          </div>
          <div
            data-aos={"fade-left"}
            data-aos-delay={"700"}
            className="contactusline2"
          ></div>
        </div>
        <div className="contact_form_details">
          <div data-aos={"fade-right"} data-aos-delay={"1800"}>
            <div className="contact_fillform_div">
              <h3 className="contact_fillform">
                Please fill out the form below to connect.
              </h3>
            </div>
            <form
              action="https://en.wikipedia.org/wiki/%22Hello,_World!%22_program"
              className="leftform"
              method="POST"
            >
              <div className="contact_name_email_div">
                <div className="contact_form_name">
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="contact_form_email">
                  <input
                    type="email"
                    id="lname"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div className="contact_form_textarea_div">
                <textarea
                  className="contact_textarea"
                  id="subject"
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="contact_sendbtn_div">
                <button className="contact_sendbtn">SEND</button>
              </div>
            </form>
          </div>
          <div
            data-aos={"fade-left"}
            data-aos-delay={"1800"}
            className="contact_information_div"
          >
            <h1 className="contact_info_headline">CONTACT INFORMATION</h1>
            <div className="contact_info_email_div">
              <img
                className="contact_icons"
                alt="email"
                src="https://img.icons8.com/material-rounded/24/ffffff/new-post.png"
              />
              <div className="contact_infoemail">
                <h1 className="contact_info_subhead">Email</h1>
                <h1 className="contact_all_information">
                  daricdypcoe@gmail.com
                </h1>
              </div>
            </div>
            <div className="contact_info_phone_div">
              <img
                className="contact_icons"
                alt="phone"
                src="https://img.icons8.com/ios-glyphs/30/ffffff/phone--v1.png"
              />
              <div className="contact_infophone">
                <h1 className="contact_info_subhead">Phone</h1>
                <h1 className="contact_all_information">+919856324566</h1>
              </div>
            </div>
            <div className="contact_info_linkedin_div">
              <img
                className="contact_icons"
                alt="linkedin"
                src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin.png"
              />
              <div className="contact_infolink">
                <h1 className="contact_info_subhead">linkedin</h1>
                <h1 className="contact_all_information">
                  daricdypcoe@gmail.com
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Section */}
      <div className="contact_main_body2">
        <div className="contact_headline_div forces2">
          <h1
            data-aos={"zoom-in-up"}
            data-aos-delay={"100"}
            className="contact_headline"
          >
            LET'S JOIN FORCES
          </h1>
        </div>
        <div className="contactus_seperator">
          <div
            data-aos={"fade-right"}
            data-aos-delay={"400"}
            className="contactusline1"
          ></div>
          <div className="contact_topic">
            <h1
              data-aos={"zoom-out"}
              data-aos-delay={"700"}
              className="contactusheading"
            >
              WANT TO JOIN US
            </h1>
          </div>
          <div
            data-aos={"fade-left"}
            data-aos-delay={"400"}
            className="contactusline2"
          ></div>
        </div>
        <div className="contact_form_details">
          <div
            className="join_team"
            data-aos={"fade-right"}
            data-aos-delay={"600"}
          >
            <div className="contact_fillform_div">
              <h3 className="contact_fillform fillform2">
                Please fill the form to Join the Team{" "}
              </h3>
            </div>
            <div>
              <div className="contact_para">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Harum, repellendus excepturi. Architecto porro rem fuga ipsum
                  vero earum inventore nemo delectus ducimus est. Harum optio
                  dolore ea nostrum tempora at?
                </p>
              </div>
            </div>
            <div className="contact_joinnow_div">
              <button className="contact_joinnowbtn">JOIN NOW</button>
            </div>
          </div>
          <div
            data-aos={"fade-left"}
            data-aos-delay={"600"}
            className="contact_information_div"
          >
            <img src={download} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
