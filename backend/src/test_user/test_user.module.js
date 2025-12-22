import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TestUserService } from './test_user.service'
import { TestUserController } from './test_user.controller'
import { Test_User } from './entities/test_user.estity'

@Module({
  imports: [TypeOrmModule.forFeature([Test_User])],
  providers: [TestUserService],
  controllers: [TestUserController],
})
export class Test_UserModule {}
