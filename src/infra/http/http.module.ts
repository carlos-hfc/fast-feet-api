import { Module } from "@nestjs/common"

import { AuthenticateAdminUseCase } from "@/domain/delivery/application/use-cases/authenticate-admin"
import { CreateDeliverymanUseCase } from "@/domain/delivery/application/use-cases/create-deliveryman"
import { DeleteDeliverymanUseCase } from "@/domain/delivery/application/use-cases/delete-deliveryman"
import { EditDeliverymanUseCase } from "@/domain/delivery/application/use-cases/edit-deliveryman"
import { FetchDeliverymansUseCase } from "@/domain/delivery/application/use-cases/fetch-deliverymans"
import { RegisterAdminUseCase } from "@/domain/delivery/application/use-cases/register-admin"

import { CryptographyModule } from "../cryptography/cryptography.module"
import { DatabaseModule } from "../database/database.module"
import { AuthenticateAdminController } from "./controllers/authenticate-admin.controller"
import { CreateDeliverymanController } from "./controllers/create-deliveryman.controller"
import { DeleteDeliverymanController } from "./controllers/delete-deliveryman.controller"
import { EditDeliverymanController } from "./controllers/edit-deliveryman.controller"
import { FetchDeliverymansController } from "./controllers/fetch-deliverymans.controller"
import { RegisterAdminController } from "./controllers/register-admin.controller"

@Module({
  imports: [DatabaseModule, CryptographyModule],
  controllers: [
    RegisterAdminController,
    AuthenticateAdminController,
    CreateDeliverymanController,
    EditDeliverymanController,
    DeleteDeliverymanController,
    FetchDeliverymansController,
  ],
  providers: [
    RegisterAdminUseCase,
    AuthenticateAdminUseCase,
    CreateDeliverymanUseCase,
    EditDeliverymanUseCase,
    DeleteDeliverymanUseCase,
    FetchDeliverymansUseCase,
  ],
})
export class HttpModule {}
