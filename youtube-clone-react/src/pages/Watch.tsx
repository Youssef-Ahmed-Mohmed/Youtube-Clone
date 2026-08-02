import { useParams, Link } from "react-router-dom";
import "./Watch.css";

export default function Watch() {
  const { id } = useParams();

  return (
    <div className="watch-page-placeholder">
      <h2>Video player coming soon</h2>
      <p>You clicked video "{id}". This page is out of scope for now — we're only building the home page.</p>
      <Link to="/" className="back-link">← Back to Home</Link>
    </div>
  );
}
