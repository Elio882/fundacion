import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://mfloresherbas00:GvFvXCzbEQ74Ptmv@cluster0.v3ckw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
    UsersModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
