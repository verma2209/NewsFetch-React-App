import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    // props lagaya h
    let {
      title,
      description,
      imageurl,
      newsurl,
      isColorChanged,
      author,
      date,
      source,
    } = this.props;
    return (
      <div>
        <div className="card" style={{ position: "relative", top: "80px" }}>
          <span
            className={
              "position-absolute top-0  translate-middle badge rounded-pill text-light  bg-" +
              (isColorChanged ? "dark" : "danger")
            }
            style={{ left: "85%", zIndex: "1" }}
          >
            {source}
            <span class="visually-hidden">unread messages</span>
          </span>
          <img
            className="card-img-top"
            src={!imageurl ? "newpic.jpeg" : imageurl}
            alt="Card cap"
          />
          <div
            className={
              "text-" +
              (isColorChanged ? "light" : "dark") +
              " card-body bg-" +
              (isColorChanged ? "dark" : "light")
            }
          >
            <h5 className="card-title">{title}....</h5>
            <p className="card-text">{description}.....</p>
            <p className="card-text">
              <small>
                {" "}
                BY {!author ? "Unknown" : author} on{" "}
                {new Date(date).toUTCString().toUpperCase()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsurl}
              target="_blank"
              className={
                "mb-2  btn " + (isColorChanged ? "btn-light" : "btn-dark")
              }
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
