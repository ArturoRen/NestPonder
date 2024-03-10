import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { getConfig } from './config/index.config';
import { ConfigModule } from '@nestjs/config';
import {
  CmsUser,
  CmsUserSchema,
} from './schema/cms_user_schema/cms_user.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // MongooseModule.forRootAsync(getConfig().options),
    // MongooseModule.forFeature(
    //   [{ name: CmsUser.name, schema: CmsUserSchema }],
    //   getConfig().options.connectionName,
    // ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
