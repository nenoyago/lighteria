import { ImageSourcePropType } from "react-native";

export class ProductProps {
  id: string;
  title: string;
  price: number;
  qty: number;
  studio: string;
  itemName: string;
  itemDesc: string;
  image: ImageSourcePropType;
  children?: React.ReactNode;

  constructor(
    id: string,
    title: string,
    price: number,
    qty: number,
    studio: string,
    itemName: string,
    itemDesc: string,
    image: ImageSourcePropType,
    children?: React.ReactNode,
    ) { 
      this.id = id;
      this.title = title;
      this.price = price;
      this.qty = qty;
      this.studio = studio;
      this.itemName = itemName;
      this.itemDesc = itemDesc;
      this.image = image;
      this.children = children;
    }

}