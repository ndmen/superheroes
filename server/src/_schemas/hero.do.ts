import { Types } from 'mongoose';

export class HeroDo {
  _id: Types.ObjectId;
  nickname: string;
  real_name: string;
  origin_description: string;
  superpowers: string;
  catch_phrase: string;
  images: string;

  constructor(props: Partial<HeroDo>) {
    this._id = props._id;
    this.nickname = props.nickname || null;
    this.real_name = props.real_name || null;
    this.origin_description = props.origin_description || null;
    this.superpowers = props.superpowers || null;
    this.catch_phrase = props.catch_phrase || null;
    this.images = props.images || null;
  }
}
