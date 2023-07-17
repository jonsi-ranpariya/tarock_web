export interface UserData {
  token: string;
  data: UserResponseData;
  message: string;
  status: number;
}

export interface UserResponseData {
  id: number;
  internal_user_id: string;
  email: string;
  username: string;
  name: string;
  characteristics?: string[];
  gender: string;
  birth_date?: any;
  avatar_index: number;
  emoji_index: number;
  status?: any;
  similar_character?: any;
  created_at: string;
  updated_at: string;
  user_points: number;
}

export interface UserFormValues {
  username: string;
  name: string;
  characteristics: string;
  status: string;
  birth_date: string;
  gender: string;
  emoji_index: number;
  avatar_index: number;
  similar_character: string;
}
export interface PollData {
  data: DailyPollData[];
  message: string;
  status: number;
}

export interface DailyPollData {
  id: number;
  type: string;
  user_id: string;
  username: string;
  description?: any;
  image_url?: any;
  question: string;
  created_at: string;
  updated_at: string;
  comment_counts: number;
  likes_counts: number;
  user: UserResponseData;
  polloption: Polloption[];
}

export interface Polloption {
  id: number;
  poll_id: number;
  options: string;
  created_at: string;
  updated_at: string;
}

export interface MyFormValues {
  title: string;
  price: number;
  status: string;
  description: string;
  country_id: number;
  state_id: number;
  city_id: number;
  img?: File;
  pdf?: File;
}
export interface AvtarData {
  data: AvtarResponseData[];
  message: string;
  status: number;
}

export interface AvtarResponseData {
  id: number;
  path: string;
}

export interface ProductData {
  message: string;
  status: string;
  current_page: number;
  data: Product[];
  first_page_url: string;
  from: number;
  next_page_url: string;
  path: string;
  per_page: string;
  prev_page_url?: any;
  to: number;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  created_at: string;
  updated_at: string;
  state_id?: number;
  country_id?: number;
  city_id?: number;
  country?: Country;
  state?: State;
  city?: City;
  is_active: number;
}
export interface CityData {
  data: City[];
  message: string;
  status: string;
}
export interface City {
  id: number;
  state_id: number;
  name: string;
  image?: any;
  created_at: string;
  updated_at: string;
}

export interface CountryData {
  message: string;
  status: string;
  current_page: number;
  data: Country[];
  first_page_url: string;
  from: number;
  next_page_url: string;
  path: string;
  per_page: string;
  prev_page_url?: any;
  to: number;
}
export interface Country {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}
export interface StateData {
  data: State[];
  message: string;
  status: string;
}
export interface State {
  id: number;
  country_id: number;
  name: string;
  created_at: string;
  updated_at: string;
}
