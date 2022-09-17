import React from "react";

import { Link } from "react-router-dom";
// import { connect } from "react-redux";

const BookCard = ({ img, title, author, summary, _id }) => {
  return (
    <div
      className="card"
      data-sal="zoom-out"
      data-sal-delay="500"
      data-sal-duration="1200"
      data-sal-easing="ease-out-bounce"
    >
      <div className="overlay">
        <img src={img} alt="" />
        <div className="strip">
          <div className="like-menu">
            <ul className="position">
              <li onClick={() => console.log("book")}>
                <i className="fa fa-heart-o fa-2x" aria-hidden="true"></i>
                <span className="vote"></span>
              </li>
              <li>
                {" "}
                <a
                  href={
                    "https://www.casadellibro.com/libro-dracula/9788439731078/2662842"
                  }
                >
                  <i
                    className="fa fa-share-square-o fa-2x"
                    aria-hidden="true"
                  ></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Link>
        <h2>{title}</h2>
      </Link>
      <br />
      <Link>
        <div>
          <b>Author:</b> {author}
        </div>
      </Link>
      <div>
        <b>Summary:</b> <p>{summary}</p>
      </div>
    </div>
  );
};

export default BookCard;
