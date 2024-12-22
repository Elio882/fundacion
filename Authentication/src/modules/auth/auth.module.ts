import { Module, forwardRef } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../../guard/JwtStrategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from '../../guard/localStrategy';
import { UsersModule } from '../users/users.module';
import { AuthGuard } from 'src/guard/auth.guard';

@Module({
  imports: [
    JwtModule.register({
      secret: 'JWT_SECRET',
      signOptions: { expiresIn: '1d' },
    }),
    forwardRef(() => UsersModule),
    PassportModule,
  ],

  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, LocalStrategy, AuthGuard],
  exports: [AuthService, AuthGuard],
})
export class AuthModule { }
