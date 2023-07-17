import { UserResponseData } from "./data";

export interface AdminPostData {
  data: PostData[];
  message: string;
  status: number;
}

export interface PostData {
  id: number;
  type: string;
  user_id: string;
  username: string;
  description: string;
  image_url: string;
  question?: any;
  created_at: string;
  updated_at: string;
  comment_counts: number;
  likes_counts: number;
  user: UserResponseData;
}
