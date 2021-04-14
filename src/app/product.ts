import {Category} from "./category";

export interface Product {
  id : number,
  name : string,
  description : string,
  createDate : Date,
  category: Category
}
