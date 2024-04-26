import { Link, useOutletContext } from "react-router-dom";
import Wrapper from "../assets/wrappers/ApodCard";

const ApodCard = ({title,thumbnail_url, hdurl,date }) => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={ hdurl != null ? hdurl : thumbnail_url } alt={title} className="img" />
      </div>
      <div className="footer">
      <div className="title-container">
    <h4>{title}</h4>
    <p>{date}</p>
  </div>
        <Link to={`/apod/${date}`} className="btn">
            details
        </Link>
      </div>
    </Wrapper>
  );
};
export default ApodCard;
