import { Types } from "mongoose";

export interface UserInterface {
  _id?: Types.ObjectId;
  name: string;
  username: string;
  password: string;
  email: string;
  balance?: number
}

export interface StockHistory {
  data: StockType[]
}

export interface StockType{
  date?: Date
  time?: number
  open: string
  close: string
  volume: string
  symbol: string
}
