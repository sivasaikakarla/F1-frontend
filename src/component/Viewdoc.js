// Inside your component where you display the list of users or emails
import { Link } from "react-router-dom";

const ViewDoc = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link to={`/user/${user.id}/document`}>{user.email}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ViewDoc;
