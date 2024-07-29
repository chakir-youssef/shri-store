export type Product ={

  product_id?:number;
  product_name?:string;
  description?:string;
  category?:string;
  price?:number;
  discount_price?:number;
  currency?:string;
  stock_quantity?:number;
  availability_status?:string;
  weight?:number;
  width?:number;
  height?:number
  color?:string;
  Scale?:string;
  material?:string;
  image_url?:string;
  image_width?: number;
  image_height?: number;
  date_added?:Date;
  date_modified?:Date;
  rating:number;
  reviews_count?:number
  shipping_cost?:number;
  shipping_options?:string;
}

export type Category={
  category_name:string;
  image_url:string;
}
