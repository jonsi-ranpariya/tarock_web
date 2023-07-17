import { usePost } from "../../store/post-context";
import PostTable from "./PostTable";

const AdminPosts = () => {
  let { datarender } = usePost();
  return (
    <PostTable
      data={datarender}
      rowsPerPage={3}
      header={[
        "Image URL",
        "Message",
        "Comment Counts",
        "Like Counts",
        "Actions",
      ]}
    />
  );
};

export default AdminPosts;
