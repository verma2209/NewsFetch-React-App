import React, { Component } from "react";
import NewsItem from "./NewsItem";

import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    Category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    Category: PropTypes.string,
  };
  //  define array for state
  //   articles = [
  //     {
  //       source: { id: "cbc-news", name: "CBC News" },
  //       author: "CBC News",
  //       title:
  //         "ANALYSIS | Here are 3 potential outcomes of the Trump jury deliberations | CBC News",
  //       description:
  //         "A momentous event in American politics now rests on 12 jurors, the Manhattanites deciding the case of Donald Trump. As they enter their second day of deliberating whether a former U.S. president will also become a convicted felon, here is a rundown on three p…",
  //       url: "http://www.cbc.ca/news/world/trump-jury-deliberations-watch-1.7218775",
  //       urlToImage:
  //         "https://i.cbc.ca/1.7209994.1716313385!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_620/usa-election-trump-reich.JPG",
  //       publishedAt: "2024-05-30T08:07:15.3515723Z",
  //       content:
  //         "A momentous event in American politics now rests on 12 jurors, the Manhattanites deciding the case of Donald Trump.\r\nThose men and women, mostly white, most appearing to be in their 30s and 40s, will… [+6644 chars]",
  //     },
  //     {
  //       source: { id: "associated-press", name: "Associated Press" },
  //       author: "MARK STEVENSON and MARÍA VERZA",
  //       title:
  //         "A violent, polarized Mexico goes to the polls to choose between 2 women presidential candidates",
  //       description:
  //         "MEXICO CITY (AP) — Mexico goes into Sunday’s election deeply divided: friends and relatives no longer talk politics for fear of worsening unbridgeable divides, while drug cartels have split the country into a patchwork quilt of warring fiefdoms.",
  //       url: "https://apnews.com/4d5f620f0f8f9b7ef6efa8b3083561a8",
  //       urlToImage:
  //         "https://storage.googleapis.com/afs-prod/media/1a4c009be27e441e998dfb737350914c/1920.jpeg",
  //       publishedAt: "2024-05-30T04:41:20Z",
  //       content:
  //         "MEXICO CITY (AP) — Mexico goes into Sunday’s election deeply divided: friends and relatives no longer talk politics for fear of worsening unbridgeable divides, while drug cartels have split the count… [+6535 chars]",
  //     },
  //     {
  //       source: { id: "cnn", name: "CNN" },
  //       author: "Clemente Duran-Ballen",
  //       title:
  //         "Hillary Clinton calls out Comey in new interview. Hear his response | CNN Politics",
  //       description:
  //         "Former FBI director James Comey responds after former presidential candidate Hillary Clinton called him out over the FBI’s investigation into emails on her private server.",
  //       url: "https://www.cnn.com/2024/05/29/politics/video/james-comey-hillary-clinton-fbi-emails-investigation-digvid",
  //       urlToImage:
  //         "https://media.cnn.com/api/v1/images/stellar/prod/20240529-hillary-comey.jpg?c=16x9&q=w_800,c_fill",
  //       publishedAt: "2024-05-30T00:26:30.274Z",
  //       content:
  //         "Former FBI director James Comey responds after former presidential candidate Hillary Clinton called him out over the FBI's investigation into emails on her private server.",
  //     },
  //     {
  //       source: { id: "the-jerusalem-post", name: "The Jerusalem Post" },
  //       author: null,
  //       title: "Congresswoman Nita Lowey: I am proud to stand with Israel",
  //       description:
  //         "Gantz: Security of Israel is above politics; PA: This is a crime.",
  //       url: "https://www.jpost.com/Arab-Israeli-Conflict/Gantz-Security-of-Israel-is-above-politics-Palestinians-This-is-a-crime-607595",
  //       urlToImage:
  //         "https://images.jpost.com/image/upload/f_auto,fl_lossy/t_Article2016_ControlFaceDetect/448812",
  //       publishedAt: "2019-11-13T04:41:00Z",
  //       content:
  //         "US Ambassador David M. Friedman said the US stands “with our friend and ally Israel at this critical moment” on social media on Tuesday after roughly 170 rockets were fired on Israel from the Gaza St… [+6160 chars]",
  //     },
  //     {
  //       source: {
  //         id: "techradar",
  //         name: "TechRadar",
  //       },
  //       author: "Carrie Marshall",
  //       title:
  //         "Looking for your next Netflix K-drama fix? The Whirlwind will whip you into a storm with tension-filled first trailer",
  //       description:
  //         "Politics come with a body count in this tense political thriller",
  //       url: "https://www.techradar.com/streaming/netflix/looking-for-your-next-netflix-k-drama-fix-the-whirlwind-will-whip-you-into-a-storm-with-tension-filled-first-trailer",
  //       urlToImage:
  //         "https://cdn.mos.cms.futurecdn.net/LtxyrJX9NMQ7kN3MBY7a7Q-1200-80.jpg",
  //       publishedAt: "2024-05-30T14:50:12Z",
  //       content:
  //         "It's fair to say that politics is far from boring right now: the UK government's just called a general election and the US election cycle continues with what feels like daily drama. But real-life eve… [+1877 chars]",
  //     },
  //   ];

  //   state for content change

  constructor() {
    super();

    //  how to acess state
    this.state = {
      //   articles: this.articles, // above state acces
      articles: [],
      page: 1,
      isColorChanged: false,
      loading: false,
    };
  }

  //fetch api
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=9f65c7881fe34155bfa043ba0aa68055&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseddata = await data.json();

    //new state to change content
    this.setState({
      articles: parseddata.articles,
      totalResults: parseddata.totalResults,
      loading: false,
    });
  }

  handlenext = async () => {
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apikey=9f65c7881fe34155bfa043ba0aa68055&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parseddata = await data.json();

      //new state to change content
      this.setState({
        articles: parseddata.articles,
        page: this.state.page + 1,
        loading: false,
      });
    }
  };
  handleprevious = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apikey=9f65c7881fe34155bfa043ba0aa68055&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseddata = await data.json();

    //new state to change content
    this.setState({
      articles: parseddata.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };

  render() {
    const { isColorChanged } = this.props;
    return (
      <div className="container my-4 text-center  ">
        {" "}
        {/* //border-5 border border-dark// */}
        <h1
          className="head my-4 text-center "
          style={{ position: "relative", top: "80px " }}
        >
          {" "}
          <span
            className={
              "border-bottom border-" +
              (this.props.isColorChanged ? "light" : "dark") +
              " border-2"
            }
          >
            <b>NewsFetch - Top Headlines</b>
          </span>
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row mx-4">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-3 my-3" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 30) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageurl={element.urlToImage}
                    newsurl={element.url}
                    isColorChanged={isColorChanged}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div
          className="but d-flex justify-content-between my-4"
          style={{ position: "relative", top: "80px" }}
        >
          <button
            disabled={this.state.page <= 1}
            onClick={this.handleprevious}
            type="button"
            className={
              "btn " + (this.props.isColorChanged ? "btn-light" : "btn-dark")
            }
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            onClick={this.handlenext}
            type="button"
            className={
              "btn " + (this.props.isColorChanged ? "btn-light" : "btn-dark")
            }
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
