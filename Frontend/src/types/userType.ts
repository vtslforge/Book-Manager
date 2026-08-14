
export type BookID = string | number;

export interface User {
  id: BookID;
  title: string;
  author: string;
  genre: string;
  publishedYear: number;
  price: number;
}