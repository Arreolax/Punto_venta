import { Injectable } from '@nestjs/common';
import { Test_User } from './entities/test_user.estity';

@Injectable()
export class TestUserService {
    constructor(
    @InjectRepository(User)
    userRepo
  ) {
    this.userRepo = userRepo
  }

  create(data) {
    const user = this.userRepo.create(data)
    return this.userRepo.save(user)
  }

  findAll() {
    return this.userRepo.find()
  }
}
