import PostContextProvider from "../../store/post-context";
import AdminPosts from "./AdminPosts";

const AdminPostMainPage = () => {
  return (
    <PostContextProvider>
      <AdminPosts />
    </PostContextProvider>
  );
};

export default AdminPostMainPage;
