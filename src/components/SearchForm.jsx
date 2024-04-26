import Wrapper from "../assets/wrappers/SearchForm";
import { Form, useNavigation } from "react-router-dom";

const SearchForm = ({ startDate, endDate }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form className="form">
        <div className="form-row">
          <div>
            <label htmlFor="start-date" className="form-label">
              start date
            </label>
            <input
              type="date"
              name="start-date"
              className="form-input"
              defaultValue={startDate}
            />
          </div>
          <div>
            <label htmlFor="end-date" className="form-label">
              end date
            </label>
            <input
              type="date"
              name="end-date"
              className="form-input"
              defaultValue={endDate}
            />
          </div>
        </div>
        <div className="form-row">
          <button
            className="btn btn-block"
            type="submit"
            style={{ marginTop: "0.5rem" }}
            disabled={isSubmitting}
          >
            {isSubmitting ? "searching..." : "search"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};
export default SearchForm;
