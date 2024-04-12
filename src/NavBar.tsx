import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <Link to={`/`}>
            <button>Home</button>
          </Link>
        </li>
        <li>
          <Link to={`/about`}>
            <button>About</button>
          </Link>
        </li>
        <li>
          <Link to={`/videos`}>
            <button>Videos</button>
          </Link>
        </li>
        <li>
          <Link to={`/message`}>
            <button>Send me a Message</button>
          </Link>
        </li>
      </ul>
    </>
  );
};
