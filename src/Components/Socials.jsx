/* eslint-disable react/jsx-no-target-blank */
import { Component } from "react";
import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube,
} from "react-icons/im";

class Socials extends Component {
  render() {
    const socialLinks = [
      { url: "http://www.facebook.com", icon: <ImFacebook /> },
      { url: "http://www.twitter.com", icon: <ImTwitter /> },
      { url: "http://www.pinterest.com", icon: <ImPinterest /> },
      { url: "http://www.instagram.com", icon: <ImInstagram /> },
      { url: "http://www.youtube.com", icon: <ImYoutube /> },
    ];

    return (
      <div className="flex ml-24">
        <ul className="flex gap-x-4">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank">
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Socials;
