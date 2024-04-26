import Wrapper from "../assets/wrappers/ApodList";
import ApodCard from "./ApodCard";

const ApodList = ({ data }) => {
  if (!data || data.length == 0) {
    return <h4 style={{ textAlign: "center" }}>No matching APOD</h4>;
  }
  return (
    <Wrapper>
      {data.map((item) => {
        return <ApodCard key={item.date} {...item} />;
      })}
    </Wrapper>
  );
};
export default ApodList;
