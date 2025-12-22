import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm'
import { TestUserModule } from './test_user/test_user.module';
import { Test_User } from './test_user/entities/test_user.estity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Test_User],
      //synchronize: true, //  solo en desarrollo
    }),
    TestUserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
