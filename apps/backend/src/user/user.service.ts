import { Injectable } from "@nestjs/common";
import { PrismaService } from "~backend/prisma/prisma.service";
import { CreateUserDto } from "./dto/user-create.dto";

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const { email, name, password } = createUserDto;

    const user = await this.prismaService.user.create({
      data: {
        email,
        name,
        password: password,
      },
    });

    return user;
  }

  async findByEmail(email: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  }
}
