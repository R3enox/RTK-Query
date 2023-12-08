import React from "react";
import PropTypes from "prop-types";
import { Comment } from "../Comment/Comment";
import { Grid } from "../Grid/Grid";
// import { comments } from "../../helpers/comments";
import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/filterSlice";
import { useGetPostsQuery } from "../../redux/commentApi";

export const Comments = () => {
  const filter = useSelector(selectFilter);
  const { data: comments, isError, isLoading } = useGetPostsQuery();

  const filteredComments = comments?.filter(({ content }) =>
    content.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Grid>
      {isError && <p>Something is gone wrong ...</p>}
      {isLoading && <p>Wait. It is loading ...</p>}
      {comments &&
        filteredComments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
    </Grid>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
