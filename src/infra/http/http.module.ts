import { Module } from "@nestjs/common"

import { RegisterAdminUseCase } from "@/domain/delivery/application/use-cases/register-admin"

import { CryptographyModule } from "../cryptography/cryptography.module"
import { DatabaseModule } from "../database/database.module"
import { RegisterAdminController } from "./controllers/register-admin.controller"

@Module({
  imports: [DatabaseModule, CryptographyModule],
  controllers: [RegisterAdminController],
  providers: [RegisterAdminUseCase],
})
export class HttpModule {}
