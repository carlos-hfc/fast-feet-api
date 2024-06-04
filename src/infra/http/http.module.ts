import { Module } from "@nestjs/common"

import { AuthenticateAdminUseCase } from "@/domain/delivery/application/use-cases/authenticate-admin"
import { AuthenticateDeliverymanUseCase } from "@/domain/delivery/application/use-cases/authenticate-deliveryman"
import { CreateDeliverymanUseCase } from "@/domain/delivery/application/use-cases/create-deliveryman"
import { CreateRecipientUseCase } from "@/domain/delivery/application/use-cases/create-recipient"
import { DeleteDeliverymanUseCase } from "@/domain/delivery/application/use-cases/delete-deliveryman"
import { DeleteRecipientUseCase } from "@/domain/delivery/application/use-cases/delete-recipient"
import { EditDeliverymanUseCase } from "@/domain/delivery/application/use-cases/edit-deliveryman"
import { EditRecipientUseCase } from "@/domain/delivery/application/use-cases/edit-recipient"
import { FetchDeliverymansUseCase } from "@/domain/delivery/application/use-cases/fetch-deliverymans"
import { RegisterAdminUseCase } from "@/domain/delivery/application/use-cases/register-admin"

import { CryptographyModule } from "../cryptography/cryptography.module"
import { DatabaseModule } from "../database/database.module"
import { AuthenticateAdminController } from "./controllers/authenticate-admin.controller"
import { AuthenticateDeliverymanController } from "./controllers/authenticate-deliveryman.controller"
import { CreateDeliverymanController } from "./controllers/create-deliveryman.controller"
import { CreateRecipientController } from "./controllers/create-recipient.controller"
import { DeleteDeliverymanController } from "./controllers/delete-deliveryman.controller"
import { DeleteRecipientController } from "./controllers/delete-recipient.controller"
import { EditDeliverymanController } from "./controllers/edit-deliveryman.controller"
import { EditRecipientController } from "./controllers/edit-recipient.controller"
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
    AuthenticateDeliverymanController,
    CreateRecipientController,
    EditRecipientController,
    DeleteRecipientController,
  ],
  providers: [
    RegisterAdminUseCase,
    AuthenticateAdminUseCase,
    CreateDeliverymanUseCase,
    EditDeliverymanUseCase,
    DeleteDeliverymanUseCase,
    FetchDeliverymansUseCase,
    AuthenticateDeliverymanUseCase,
    CreateRecipientUseCase,
    EditRecipientUseCase,
    DeleteRecipientUseCase,
  ],
})
export class HttpModule {}
