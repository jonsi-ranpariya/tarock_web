import { useNavigate } from "react-router-dom";

import TableItem from "../UI/TableItem";
import Actions from "../UI/Actions";
import Characteristics from "../UI/Characteristics";
import { PostData } from "../../models/post-data";
import { useState } from "react";

const PostTableRow = (props: { posts: PostData[] }) => {
  const [showDelete, setShowDelete] = useState(false);
  const [postId, setPostId] = useState(0);

  const navigate = useNavigate();

  return (
    <tbody>
      {/* {showDelete && (
        <UserDelete
          id={userId}
          setShowDelete={setShowDelete}
          onCancel={() => {
            setShowDelete(false);
          }}
        />
      )} */}
      {props.posts.map((post, key) => {
        return (
          <tr className="border-x-0 border-t-0 border-b border-slate-200  text-slate-600 dark:text-mediumGray text-sm font-medium xs:text-left md:text-left  xs:inline-block md:table-row  xs:py-4 md:py-0">
            <TableItem
              title="Image URL"
              children={
                <img
                  className="w-2/3 h-2/3"
                  src={`https://storage.cloud.google.com/staging.tarock-web-application.appspot.com/${post.image_url}`}
                />
              }
            />
            <TableItem title="Email" children={post.description} />
            <TableItem title="Email" children={post.comment_counts} />
            <TableItem title="Email" children={post.likes_counts} />

            <TableItem
              title="Actions"
              children={
                <Actions
                  id={post.id}
                  onEditClick={() => {
                    console.log(post.id);
                    // navigate(`/home/user-related-content/${post.id}/edit`);
                  }}
                  onDeleteClick={(id) => {
                    setPostId(post.id);
                    setShowDelete(true);
                  }}
                />
              }
            />
          </tr>
        );
      })}
    </tbody>
  );
};

export default PostTableRow;
