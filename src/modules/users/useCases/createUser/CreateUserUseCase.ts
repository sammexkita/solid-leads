import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const leadAlreadyExists = this.usersRepository.findByEmail(email);
  
    if (!email) {
      throw new Error("You must provide an email address");
    }
    if (!name) {
      throw new Error("You must provide a name");
    }
    if (leadAlreadyExists) {
      throw new Error("User already exists");
    } 

    return this.usersRepository.create({ email, name });
  }
}

export { CreateUserUseCase };
