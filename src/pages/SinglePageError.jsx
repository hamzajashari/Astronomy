import { useLoaderData, Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/Navbar";

const SinglePageError = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <Wrapper>
      <section style={{ textAlign: "center"}}>
        <Link to="/" className="btn" style={{marginBottom:"3rem"}}>
          back home
        </Link>
        {/* <h2>{error.message}</h2> */}

        <h2>There was an error...</h2>
      </section>
    </Wrapper>
  );
};
export default SinglePageError;
