import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { validate } from "./env.validation";
import { PrismaService } from "./prisma/prisma.service";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { LoggerModule } from "nestjs-pino";

@Module({
  imports: [
    // Import the ConfigModule for loading environment variables
    ConfigModule.forRoot({
      validate,
      isGlobal: true,
    }),
    LoggerModule.forRoot(),
    UserModule,
    HealthModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
