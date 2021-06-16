import React, { useEffect /* , useState */ } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// import { getAllPosts } from "../apis/postApi";
import PostCard from "../components/PostCard";
import { resetPosts } from "../redux/actions/dashboardAction/actions";
import { DASHBOARD_CONSTANTS } from "../redux/actions/dashboardAction/actionTypes";

function Dashboard(props) {
  // const [posts, setPosts] = useState([]);
  const history = useHistory();
  const state = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  const { postData: posts } = state;

  useEffect(() => {
    dispatch({ type: DASHBOARD_CONSTANTS.FETCH_POSTS });

    return () => {
      dispatch(resetPosts());
    };
  }, [dispatch]);

  const handleClick = (id) => {
    history.push(`/dashboard/details/${id}`);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <h4>Posts</h4>
      <div className="w-75">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            handleClick={() => handleClick(post.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
