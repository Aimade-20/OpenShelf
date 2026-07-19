export type bookDetail  = {
  _id: string;
  title: string;
  author: string;
  isbn: string;
  category: string;
  publicationYear: number;
  description: string;
  available: boolean;
  image?: string;
};