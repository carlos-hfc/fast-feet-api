import { Module } from "@nestjs/common"

import { AuthenticateAdminUseCase } from "@/domain/delivery/application/use-cases/authenticate-admin"
import { RegisterAdminUseCase } from "@/domain/delivery/application/use-cases/register-admin"

import { CryptographyModule } from "../cryptography/cryptography.module"
import { DatabaseModule } from "../database/database.module"
import { AuthenticateAdminController } from "./controllers/authenticate-admin.controller"
import { RegisterAdminController } from "./controllers/register-admin.controller"

@Module({
  imports: [DatabaseModule, CryptographyModule],
  controllers: [RegisterAdminController, AuthenticateAdminController],
  providers: [RegisterAdminUseCase, AuthenticateAdminUseCase],
})
export class HttpModule {}
