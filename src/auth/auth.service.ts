import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AuthEntity } from './entity/auth.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(user: string, password: string): Promise<AuthEntity> {
    const person = await this.prisma.user.findUnique({ where: { user } });

    if (!person) {
      throw new NotFoundException(`No user found for: ${user}`);
    }

    const isPasswordValid = await bcrypt.compare(password, person.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    return {
      accessToken: this.jwtService.sign({ userId: person.personId }),
    };
  }
}
