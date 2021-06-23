import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import PostCard from "components/PostCard";
import { fetchPosts, resetPosts } from "redux/actions/dashboardAction/actions";
import LoadingIndicator from "components/LoadingIndicator";

function Dashboard(props) {
  const history = useHistory();
  const state = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  const { postData: posts, loading } = state;

  useEffect(() => {
    dispatch(fetchPosts());

    return () => {
      dispatch(resetPosts());
    };
  }, [dispatch]);

  const handleClick = (id) => {
    history.push(`/dashboard/details/${id}`);
  };

  if (loading) return <LoadingIndicator />;

  return (
    <div>
      <h4 className="text-center mt-2">Posts</h4>
      <div className="">
        <Container>
          <Row xs="1" sm="2" md="3">
            {posts.map((post) => (
              <Col key={post.id}>
                <PostCard
                  post={post}
                  handleClick={() => handleClick(post.id)}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Dashboard;
