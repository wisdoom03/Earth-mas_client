export interface IMarketDetail {
  amount: number;
  createAt: string;
  delete?: null;
  description: string;
  discount: number;
  id: string;
  like: number;
  minidescription: string;
  reviewpeople: number;
  reviewscore: number;
  stock: number;
  title: string;
  updateAt: string;
  url: string;
  marketcategory: IMarketDetailCategory;
}

export interface IMarketDetailCategory {
  createAt: string;
  delete?: null;
  id: string;
  name: string;
  updateA: string;
}
