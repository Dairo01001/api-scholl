import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AuthEntity } from './entity/auth.entity';
import * as bcrypt from 'bcrypt';
import { UserStatus } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(user: string, password: string): Promise<AuthEntity> {
    const person = await this.prisma.user.findUnique({
      where: { user },
      include: {
        person: {
          include: {
            teacher: true,
          },
        },
      },
    });

    if (!person || person.status === UserStatus.Inactive) {
      throw new NotFoundException(`No user found for: ${user}`);
    }

    const isPasswordValid = await bcrypt.compare(password, person.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    return {
      id: person.personId,
      role: person.role,
      status: person.status,
      name: `${person.person.firstName} ${person.person.surname}`,
      email: person.person.teacher?.email || '',
      accessToken: this.jwtService.sign({ userId: person.personId }),
    };
  }
}
