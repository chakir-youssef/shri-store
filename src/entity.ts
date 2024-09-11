export type Product ={

  product_id?:number;
  product_name?:string;
  description?:string;
  category?:string;
  gender?: string,
  price?:number;
  discount_price?:number;
  currency?:string;
  stock_quantity?:number;
  availability_status?:string;
  weight?:number;
  width?:number;
  height?:number
  color?:string;
  scale?:string;
  material?:string;
  image_url?:string;
  image_width?: number;
  image_height?: number;
  date_added?:string;
  date_modified?:string;
  rating:number;
  reviews_count?:number
  shipping_cost?:number;
  shipping_options?:string;
}

export type Category={
  id:string;
  category_name:string;
  image_url:string;
}
