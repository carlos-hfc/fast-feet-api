import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"

import { AuthModule } from "./auth/auth.module"
import { envSchema } from "./env/env"
import { EnvModule } from "./env/env.module"
import { EnvService } from "./env/env.service"

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: env => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
    EnvModule,
  ],
  controllers: [],
  providers: [EnvService],
})
export class AppModule {}
