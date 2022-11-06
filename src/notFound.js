import { Link } from "react-router-dom";

function notFound() {
  return (
    <div>
      <p>Sorry, page not found</p>
      <Link to="/">Back to the homepage...</Link>
    </div>
  );
}

export default notFound;
