import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from '../base_schema/base.schema';
import { HydratedDocument } from 'mongoose';

@Schema({
  collection: 'cms_user',
  timestamps: {
    createdAt: 'time',
    updatedAt: 'time',
  },
  //toJSON()方法是用来把查询出来的数据库数据对象转换成普通对象
  toJSON: {
    virtuals: true,
    transform: (doc, ret, opt) => {
      delete ret._id;
    },
  },
})
export class CmsUser {
  @Prop({ required: true })
  nickName: string;

  @Prop({ required: true })
  password: string;
}

export const CmsUserSchema = SchemaFactory.createForClass(CmsUser);

export type CmsUserDocumentType = HydratedDocument<CmsUser>;
