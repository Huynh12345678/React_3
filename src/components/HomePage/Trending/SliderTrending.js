/* eslint-disable */
import { useState, useEffect, useRef, memo } from "react";
import axios from "axios";
import API from "../../../api/axiosConfig";
import "../../../scss/components/Slider.scss";
import { API_KEY, API_URL, IMAGE_URL } from "./../../../api/Config";
import chuyenDoiUrl from "./../../../helpers/urlSlug";
import { Link } from "react-router-dom";
import mySvg from "../../../assets/trending.svg";
//Moment js
import moment from "moment";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/scrollbar/scrollbar.scss";
//material ui
import { makeStyles, Grid, Fade } from "@material-ui/core";
import CustomDoughnut from "../../Doughnut/CustomDoughnut";
import { no_poster } from "../../../assets";
import { loadImage, options } from "../Slider";

const handleDate = (date) => {
  let dt = moment(date, "YYYY-MM-DD");
  return dt.format("ll");
};

const useStyles = makeStyles((theme) => ({
  styledDoughnut: {
    paddingRight: "0 !important",
  },
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
    display: "flex",
    justifyContent: "center",
    paddingTop: "120px",
    height: "385px",
  },
}));
const SliderTrending = (props) => {
  const [firstLoad, setFirstLoad] = useState(true);
  const ref = useRef();
  const set = props.trend;
  const [load, setLoad] = useState(true);
  const classes = useStyles();
  const [trending, setTrending] = useState(null);
  //  Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    setLoad(true);
    const getList = setTimeout(
      async () => {
        try {
          await API.get(
            `${API_URL}trending/all/${set}?api_key=${API_KEY}`
          ).then((res) => {
            setTrending(res.data.results);
            const observer = new IntersectionObserver(([entry]) => {
              if (entry.isIntersecting) {
                let element = entry.target;
                setTimeout(
                  () => {
                    setLoad(true);
                    setTimeout(
                      () => {
                        Promise.all(
                          res.data.results
                            .slice(0, 8)
                            .map((image) => loadImage(image))
                        )
                          .then(() => {
                            setTimeout(
                              () => {
                                element
                                  .querySelectorAll("img")
                                  .forEach((item) => {
                                    item.src = item.dataset.src;
                                  });
                                setFirstLoad(false);
                                setTimeout(() => setLoad(false), 0);
                              },
                              firstLoad ? 400 : 0
                            );
                          })
                          .catch((err) =>
                            console.log("Failed to load images", err)
                          );
                      },
                      firstLoad ? 300 : 0
                    );
                  },
                  firstLoad ? 300 : 0
                );
                observer.unobserve(ref.current);
              }
            }, options);
            if (ref.current) {
              observer.observe(ref.current);
            }
            firstLoad && setTimeout(() => setLoad(false), 0);
          });
        } catch (err) {
          console.log(err);
        }
      },
      firstLoad ? 0 : 400
    );
    return () => clearTimeout(getList);
  }, [ref, set]);

  return (
    <div
      style={{
        backgroundImage: `url(${mySvg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 118px",
        backgroundSize: "1325px",
        minHeight: "300px",
      }}
    >
      <Fade in={!load} timeout={firstLoad ? 800 : 500}>
        <div ref={ref} className="popular container trending mt-3 p-0">
          {trending ? (
            <Swiper
              freeMode={true}
              grabCursor={false}
              centeredSlides={false}
              spaceBetween={15}
              slidesPerView={"auto"}
              speed={400}
              scrollbar={{ draggable: true }}
              onFromEdge={() =>
                root.style.setProperty("--opacityTrending", "0")
              }
              onReachBeginning={() =>
                root.style.setProperty("--opacityTrending", "1")
              }
            >
              {trending.map((value, key) => {
                return (
                  <SwiperSlide
                    key={key}
                    title={
                      value.media_type == "movie" ? value.title : value.name
                    }
                  >
                    {value.media_type == "movie" ? (
                      <>
                        <Link
                          to={
                            "/movie/" +
                            value.id +
                            "-" +
                            chuyenDoiUrl(value.title)
                          }
                        >
                          <li className={firstLoad ? "load" : "loaded"}>
                            <img
                              className="img-fluid"
                              src={no_poster}
                              data-src={IMAGE_URL + "w500" + value.poster_path}
                              alt=""
                              loading="eager"
                            />
                          </li>
                        </Link>
                        <div className="doughnut">
                          <Grid item className={classes.styledDoughnut}>
                            <CustomDoughnut
                              fontSize="0.6em"
                              vote_average={firstLoad ? "" : value.vote_average}
                              size={34}
                              size2={2}
                              offAnimation={true}
                            />
                          </Grid>
                        </div>
                        <div
                          className="root"
                          style={{
                            visibility: firstLoad ? "hidden" : "visible",
                          }}
                        >
                          <Link
                            to={
                              "/movie/" +
                              value.id +
                              "-" +
                              chuyenDoiUrl(value.title)
                            }
                            title={value.title}
                          >
                            {value.title}
                          </Link>
                          <p>{handleDate(value.release_date)}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <Link
                          to={
                            "/tv/" + value.id + "-" + chuyenDoiUrl(value.name)
                          }
                        >
                          <li className={firstLoad ? "load" : "loaded"}>
                            <img
                              className="img-fluid"
                              src={no_poster}
                              data-src={IMAGE_URL + "w500" + value.poster_path}
                              alt=""
                              loading="eager"
                            />
                          </li>
                        </Link>
                        <div className="doughnut">
                          <Grid item className={classes.styledDoughnut}>
                            <CustomDoughnut
                              fontSize="0.6em"
                              vote_average={firstLoad ? "" : value.vote_average}
                              size={34}
                              size2={2}
                              offAnimation={true}
                            />
                          </Grid>
                        </div>
                        <div
                          className="root"
                          style={{
                            visibility: firstLoad ? "hidden" : "visible",
                          }}
                        >
                          <Link
                            to={
                              "/tv/" + value.id + "-" + chuyenDoiUrl(value.name)
                            }
                            title={value.name}
                          >
                            {value.name}
                          </Link>
                          <p>{handleDate(value.first_air_date)}</p>
                        </div>
                      </>
                    )}
                  </SwiperSlide>
                );
              })}
              <SwiperSlide
                className="d-flex justify-content-center align-items-center"
                style={{ width: "40px", top: "128px" }}
              >
                <h4 style={{ paddingLeft: "0px" }}></h4>
              </SwiperSlide>
            </Swiper>
          ) : null}
        </div>
      </Fade>
    </div>
  );
};

export default memo(SliderTrending);
