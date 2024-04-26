import { useLoaderData, Link } from "react-router-dom";
import axios from "axios";
import Wrapper from "../assets/wrappers/ApodPage";
import { useQuery } from "@tanstack/react-query";
const singleApodUrl =
  `https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_API_KEY}&thumbs=true&hd=false&`;

const singleApodQuery = (id) => {
  return {
    queryKey: ["apod", id],
    queryFn: async () => {
      const { data } = await axios.get(
        `${singleApodUrl}date=${id}`
      );
      return data;
    },
  };
};
export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;

    await queryClient.ensureQueryData(singleApodQuery(id));
    return { id };
  };

const Apod = () => {
  const { id } = useLoaderData();

  const { data } = useQuery(singleApodQuery(id));

  if (!data) return <Navigate to="/" />;
  const {
    title,
    date,
    hdurl,
    explanation,
    media_type,
    service_version,
    url,
    thumbnail_url,
  } = data;

  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          back home
        </Link>
        <h3>{title}</h3>
      </header>
      <div className="apod">
        <img
          src={hdurl != null ? hdurl : thumbnail_url}
          alt={title}
          className="img"
        />
        <div className="apod-info">
          <p>
            <span className="apod-data">name:</span>
            {title}
          </p>
          <p>
            <span className="apod-data">date:</span>
            {date}
          </p>
          <p>
            <span className="apod-data">type:</span>
            {media_type}
          </p>
          <p>
            <span className="apod-data">explanation:</span>
            {explanation}
          </p>
          <p>
            <span className="apod-data">service_version:</span>
            {service_version}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
export default Apod;
