import { useLoaderData } from "react-router-dom";
import axios from "axios";
import ApodList from "../components/ApodList";
import SearchForm from "../components/SearchForm";
import { QueryClient, useQuery } from "@tanstack/react-query";

const url = `https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_API_KEY}`;

const searchApodQuery = (startDate, endDate) => {
  return {
    queryKey: ["startDate", startDate, "endDate", endDate],
    queryFn: async () => {
      const res = await axios.get(
        `${url}&thumbs=true&hd=false&start_date=${startDate}&end_date=${endDate}`
      );
      return res.data.filter((item) => !item.hasOwnProperty("copyright"));
    },
  };
};
export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);

    const today = new Date();
    const oneWeekAgo = new Date(today);
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const startDate =
      url.searchParams.get("start-date") ||
      oneWeekAgo.toISOString().split("T")[0];
    const endDate =
      url.searchParams.get("end-date") || today.toISOString().split("T")[0];

    await queryClient.ensureQueryData(searchApodQuery(startDate, endDate));
    return {
      startDate,
      endDate,
    };
  };
const Landing = () => {
  const { startDate, endDate } = useLoaderData();
  const { data: data } = useQuery(searchApodQuery(startDate, endDate));
  return (
    <>
      <SearchForm startDate={startDate} endDate={endDate} />
      <ApodList data={data} />
    </>
  );
};
export default Landing;
