import React, { useState } from "react";
import "./home.css";
import Form from "../../components/form";
import thumb1 from "../../images/thumb-1.png";
import thumb2 from "../../images/thumb-2.png";
import thumb3 from "../../images/thumb-3.png";
import pointer from "../../images/pointer.png";
import fingerprint from "../../images/fingerprint.png";
import notification from "../../images/notification.png";
import location from "../../images/location.png";
import gears from "../../images/gears.png";
import globe from "../../images/globe.png";
import check from "../../images/check.svg";
import bell from "../../images/bell.png";
import mail from "../../images/mail.png";
import video from "../../images/video.png";
import layers from "../../images/layers.png";
import brush from "../../images/brush.png";
import drop from "../../images/drop.png";
import cart from "../../images/cart.png";
import download from "../../images/download.png";
import arrow from "../../images/arrow.png";
import settings from "../../images/settings.png";
import app from "../../images/app.png";
import bike from "../../images/bike.png";
import motorbike from "../../images/motorbike.png";
import googlePlay from "../../images/google-play.png";
import appStore from "../../images/app-store.png";
import formHouse from "../../images/form-house.svg";
import formPhone from "../../images/form-phone.svg";
import formMail from "../../images/form-mail.svg";
import { TextField } from "@mui/material";

function Home() {
  const [isOpenForm, setIsOpenForm] = useState(false);

  const showForm = () => {
    setIsOpenForm(true);
  };
  const closeForm = () => {
    setIsOpenForm(false);
  };

  return (
    <div>
      {/* <header className="app-header"></header> */}
      <div>
        <div className="showcase">
          <div className="texts">
            <div className="htext">Creative way to Showcase your App</div>
            <div className="stext">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              commodo suscipit pellentesque. Nam diam nisi, aliquet lacinia odio
              id, imperdiet rutrum est. Integer vel felis placerat, tempor odio
              non.
            </div>
            <div className="button">Get Started</div>
          </div>
          <div className="thumb1">
            <img alt="" className="thumb1" src={thumb1} />
          </div>
        </div>
        <div className="functionality">
          <div className="ltext">Code Challenge</div>
          <div className="dash"></div>
          <div className="stext" style={{ width: "50vw" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            at ex commodo, sagittis urna vitae, eleifend lectus. Nullam maximus
            sem.
          </div>
          <div className="grid">
            <div className="grid-item">
              <img alt="" className="grid-icons" src={pointer} />
              <div className="mtext">Fully Functional</div>
              <div className="stext">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sed mauris tortor.
              </div>
            </div>
            <div className="grid-item">
              <img alt="" className="grid-icons" src={fingerprint} />
              <div className="mtext">Fully Functional</div>
              <div className="stext">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sed mauris tortor.
              </div>
            </div>
            <div className="grid-item">
              <img alt="" className="grid-icons" src={notification} />
              <div className="mtext">Fully Functional</div>
              <div className="stext">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sed mauris tortor.
              </div>
            </div>
            <div className="grid-item">
              <img alt="" className="grid-icons" src={location} />
              <div className="mtext">Location Tracking</div>
              <div className="stext">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sed mauris tortor.
              </div>
            </div>
            <div className="grid-item">
              <img alt="" className="grid-icons" src={gears} />
              <div className="mtext">Powerful Settings</div>
              <div className="stext">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sed mauris tortor.
              </div>
            </div>
            <div className="grid-item">
              <img alt="" className="grid-icons" src={globe} />
              <div className="mtext">Multiple Languages</div>
              <div className="stext">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sed mauris tortor.
              </div>
            </div>
          </div>
        </div>
        <div className="work">
          <img alt="" src={thumb2} className="thumb2" />
          <div className="work-icon">
            <div className="ltext">Work faster with powerful tools</div>
            <div className="work-text">
              <img alt="" src={check} className="check" />
              <div className="stext">
                Combined with a handful of model sentence structures looks
                reasonable
              </div>
            </div>
            <div className="work-text">
              <img alt="" src={check} className="check" />
              <div className="stext">
                Combined with a handful of model sentence structures looks
                reasonable
              </div>
            </div>
            <div className="work-text">
              <img alt="" src={check} className="check" />
              <div className="stext">
                Combined with a handful of model sentence structures looks
                reasonable
              </div>
            </div>
            <div className="work-text">
              <img alt="" src={check} className="check" />
              <div className="stext">
                Combined with a handful of model sentence structures looks
                reasonable
              </div>
            </div>
            <div className="work-text">
              <img alt="" src={check} className="check" />
              <div className="stext">
                Combined with a handful of model sentence structures looks
                reasonable
              </div>
            </div>
            <div className="work-shadow">
              <img alt="" src={bell} className="shadow" />
              <img alt="" src={mail} className="shadow" />
              <img alt="" src={video} className="shadow" />
            </div>
          </div>
        </div>
        <div className="share">
          <div className="work-icon">
            <div className="ltext">Share your photos with friends easily</div>
            <div className="work-text">
              <img alt="" src={layers} className="shadow" />
              <div className="stext">
                Combined with a handful of model sentence structures looks
                reasonable
              </div>
            </div>
            <div className="work-text">
              <img alt="" src={brush} className="shadow" />
              <div className="stext">
                Combined with a handful of model sentence structures looks
                reasonable
              </div>
            </div>
            <div className="work-text">
              <img alt="" src={drop} className="shadow" />
              <div className="stext">
                Combined with a handful of model sentence structures looks
                reasonable
              </div>
            </div>
            <div className="work-text">
              <img alt="" src={cart} className="shadow" />
              <div className="stext">
                Combined with a handful of model sentence structures looks
                reasonable
              </div>
            </div>
            <div className="button">Learn More</div>
          </div>
          <img alt="" src={thumb3} className="thumb3" />
        </div>
        <div className="code">
          <div className="ltext">Code Challenge</div>
          <div className="stext-white" style={{ width: "50vw" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            at ex commodo, sagittis urna vitae, eleifend lectus. Nullam maximus
            sem.
          </div>
          <div className="code-row">
            <div className="code-div">
              <img alt="" src={download} className="code-icon" />
              <div className="mtext">Install the App</div>
              <div className="stext-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Elius
                saepe, voluptates quis enim incidunt obcaecati?
              </div>
            </div>
            <img alt="" src={arrow} />
            <div className="code-div">
              <img alt="" src={settings} className="code-icon" />
              <div className="mtext">Setup your profile</div>
              <div className="stext-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Elius
                saepe, voluptates quis enim incidunt obcaecati?
              </div>
            </div>
            <img alt="" src={arrow} />
            <div className="code-div">
              <img alt="" src={app} className="code-icon" />
              <div className="mtext">Enjoy the features!</div>
              <div className="stext-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Elius
                saepe, voluptates quis enim incidunt obcaecati?
              </div>
            </div>
          </div>
        </div>
        <div className="basma">
          <div className="ltext">Code Challenge</div>
          <div className="dash"></div>
          <div className="stext" style={{ width: "50vw" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            at ex commodo, sagittis urna vitae, eleifend lectus. Nullam maximus
            sem.
          </div>
          <div className="plans">
            <div className="plan">
              <img alt="" src={bike} className="plan-icon" />
              <div className="mtext">BASIC</div>
              <div className="plan-price">$49</div>
              <div className="plan-text">5GB Linux Web Space</div>
              <div className="plan-text">5 MySQL Databases</div>
              <div className="plan-text">24/7 Tech Support</div>
              <div className="plan-text">Daily Backups</div>
              <div className="button" style={{ marginBottom: "-3.5vh" }}>
                Sign Up
              </div>
            </div>
            <div className="plan">
              <img alt="" src={motorbike} className="plan-icon" />
              <div className="mtext">PRO</div>
              <div className="plan-price">$129</div>
              <div className="plan-text">10GB Linux Web Space</div>
              <div className="plan-text">50 MySQL Databases</div>
              <div className="plan-text">Unlimited Email</div>
              <div className="plan-text">Daily Backups</div>
              <div className="button" style={{ marginBottom: "-3.5vh" }}>
                Sign Up
              </div>
            </div>
          </div>
          <div className="choose">
            <div>Not sure what to choose? </div>
            <div style={{ textDecoration: "underline" }}> Contact Us</div>
          </div>
        </div>
        <div className="store">
          <div className="ltext-white">BASMA is available for all devices</div>
          <div className="stext-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            vestibulum dictum maximus. In in arcu finibus, bibendum arcu sit
            amet, ultricies felis. Phasellus ante ante, aliquam quis mauris non,
            rutrum imperdiet elit. Curabitur rutrum ultricies condimentum.
            Praesent eu nunc ex.
          </div>
          <div className="stores">
            <img alt="" src={googlePlay} className="store-icon" />
            <img alt="" src={appStore} className="store-icon" />
          </div>
          <div style={{ fontStyle: "italic" }} className="stext-white">
            * Available on iPhone, iPad and all Android devices
          </div>
        </div>
        <div className="subscribe">
          <div className="ltext">Subscribe to get Updates</div>
          <div className="stext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            vestibulum dictum maximus. In in arcu finibus, bibendum arcu sit
            amet, ultricies felis. Phasellus ante ante, aliquam quis.
          </div>
          <div className="big-button" onClick={showForm}>
            Subscribe
          </div>
        </div>
        <div className="tuned">
          <div className="ltext">Stay Tuned</div>
          <div className="dash"></div>
          <div className="stext" style={{ width: "50vw", marginBottom: "5vh" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            at ex commodo, sagittis urna vitae, eleifend lectus. Nullam maximus
            sem.
          </div>
          <div className="tuned-parts">
            <div className="tuned-text">
              <div className="stext">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                vestibulum dictum maximus.
              </div>
              <div className="tuned-items">
                <div className="purple-home">
                  <img alt="" src={formHouse} className="purple-icon-house" />
                </div>
                <div className="stext">
                  Combined with a handful of model sentence
                </div>
              </div>
              <div className="tuned-items">
                <div className="purple">
                  <img alt="" src={formPhone} className="purple-icon" />
                </div>
                <div className="stext">+1230 456 789-012 345 6789</div>
              </div>
              <div className="tuned-items">
                <div className="purple">
                  <img alt="" src={formMail} className="purple-icon" />
                </div>
                <div className="stext">exampledomain@domain.com</div>
              </div>
            </div>
            <div>
              <div className="tuned-inputs">
                <TextField
                  id="outlined-textarea"
                  label="Name"
                  placeholder="Name"
                  multiline
                  fullWidth
                />
                <TextField
                  id="outlined-textarea"
                  label="Email"
                  placeholder="Email"
                  multiline
                  fullWidth
                />
                <TextField
                  id="outlined-textarea"
                  label="Subject"
                  placeholder="Subject"
                  multiline
                  fullWidth
                />
                <TextField
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  rows={4}
                  defaultValue=""
                />
                <div className="big-button">Send Message</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Form
        open={isOpenForm}
        onClose={() => {
          closeForm();
        }}
      />
    </div>
  );
}

export default Home;
