import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto, RegisterUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { genSaltSync, hashSync, compareSync } from 'bcryptjs';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  getHashPassword = (password: string) => {
    const salt = genSaltSync(10);
    const hash = hashSync(password, salt);
    return hash;
  };

  async register(registerUserDto: RegisterUserDto) {
    const isExist = await this.prisma.users.findUnique({
      where: { email: registerUserDto.email },
    });
    if (isExist) {
      throw new BadRequestException(`Email: ${registerUserDto.email} đã tồn tại`);
    }

    const hashedPassword = this.getHashPassword(registerUserDto.password);

    const user = await this.prisma.users.create({
      data: {
        email: registerUserDto.email,
        password: hashedPassword,
        name: registerUserDto.name,
        role: registerUserDto.role || 'USER',
        phone: registerUserDto.phone,
        province: registerUserDto.province,
        district: registerUserDto.district,
        commune: registerUserDto.commune,
        address: registerUserDto.address,
        housing_type: "PRIVATE_HOUSE",
        refreshToken: '',
      },
    });

    return {
      id: user.id,
      createdAt: user.createdAt,
    };
  }

  async create(createUserDto: CreateUserDto) {
    const isExist = await this.prisma.users.findUnique({
      where: { email: createUserDto.email },
    });
    if (isExist) {
      throw new BadRequestException(`Email: ${createUserDto.email} đã tồn tại`);
    }

    const hashedPassword = this.getHashPassword(createUserDto.password);

    const user = await this.prisma.users.create({
      data: {
        email: createUserDto.email,
        password: hashedPassword,
        name: createUserDto.name,
        role: createUserDto.role || 'USER',
        phone: createUserDto.phone,
        province: createUserDto.province,
        district: createUserDto.district,
        commune: createUserDto.commune,
        address: createUserDto.address,
        housing_type: "PRIVATE_HOUSE",
        refreshToken: '',
      },
    });

    return {
      id: user.id,
      createdAt: user.createdAt,
    };
  }

  async findAll() {
    return await this.prisma.users.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });
  }

  async findOne(id: number) {
    const user = await this.prisma.users.findUnique({
      where: { id: Number(id) },
    });
    if (!user) {
      throw new BadRequestException(`User with id ${id} not found`);
    }
    return user;
  }

  async findOneByUserName(email: string) {
    return this.prisma.users.findUnique({
      where: { email },
    });
  }

  isValidPassword(password: string, hash: string) {
    return compareSync(password, hash);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.findOne(id); // Check user exists

    const updatedUser = await this.prisma.users.update({
      where: { id: id },
      data: {
        name: updateUserDto.name,
        email: updateUserDto.email,
      },
    });

    return updatedUser;
  }

  async remove(id: number) {
    await this.findOne(id);

    return await this.prisma.users.delete({
      where: { id },
    });
  }

  async updateRefreshToken(refreshToken: string, id: number) {
    await this.prisma.users.update({
      where: { id },
      data: { refreshToken },
    });
  }

  async findUserByRefreshToken(refreshToken: string) {
    return this.prisma.users.findFirst({
      where: { refreshToken },
    });
  }
}
