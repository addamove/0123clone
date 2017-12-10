import React from "react";
import MovieDB from "../../components/MovieDB/MovieDb";
import classes from "./Content.css";
import { Grid, Row, Col } from "react-bootstrap/lib";
import FlatButton from "material-ui/FlatButton";
import MdNavigateNext from "react-icons/lib/md/navigate-next";

const Content = props => {
  // const APIkey =
  //   "api_key=03b9a40695aae1f4e99a42e90e012e9e&language=en-US&page=";
  let URL = null;

  switch (props.type) {
    case "movies":
      URL =
        "https://api.themoviedb.org/3/movie/now_playing?api_key=03b9a40695aae1f4e99a42e90e012e9e&language=en-US&page=";
      break;
    case "TV":
      URL =
        "https://api.themoviedb.org/3/tv/on_the_air?api_key=03b9a40695aae1f4e99a42e90e012e9e&language=en-US&page=";
      break;
    default:
      URL = null;
  }

  return (
    <div className={classes.container}>
      {" "}
      <Grid>
        <Row className="show-grid">
          <Col xs={4} md={4}>
            <div className={classes.Title}>
              {props.title}
              <MdNavigateNext className={classes.IconFix} size={28} />
            </div>

            <FlatButton label={"Top " + props.title} />
            <FlatButton label="Featured" />
          </Col>
          <Col xs={12} md={12}>
            {<MovieDB page={"1"} URL={URL} />}
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Content;
