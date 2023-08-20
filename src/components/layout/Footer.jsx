import React from "react";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import {IoFastFoodOutline} from "react-icons/io5";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2><IoFastFoodOutline /> ZUMBA</h2>
        <p>We are trying to give you the best taste possible.</p>
        <br />
        <em>We give attention to genuine feedback.</em>
        <strong>All right received @Zumba</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>
        <a href="https://instagram.com/prashant.kumarr_">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/prashant67690">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;