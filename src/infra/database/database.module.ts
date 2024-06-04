import { Module } from "@nestjs/common"

import { AdminsRepository } from "@/domain/delivery/application/repositories/admins-repository"
import { DeliverymansRepository } from "@/domain/delivery/application/repositories/deliverymans-repository"
import { RecipientsRepository } from "@/domain/delivery/application/repositories/recipients-repository"

import { PrismaService } from "./prisma/prisma.service"
import { PrismaAdminsRepository } from "./prisma/repositories/prisma-admins-repository"
import { PrismaDeliverymansRepository } from "./prisma/repositories/prisma-deliverymans-repository"
import { PrismaRecipientsRepository } from "./prisma/repositories/prisma-recipients-repository"

@Module({
  providers: [
    PrismaService,
    {
      provide: AdminsRepository,
      useClass: PrismaAdminsRepository,
    },
    {
      provide: DeliverymansRepository,
      useClass: PrismaDeliverymansRepository,
    },
    {
      provide: RecipientsRepository,
      useClass: PrismaRecipientsRepository,
    },
  ],
  exports: [
    PrismaService,
    AdminsRepository,
    DeliverymansRepository,
    RecipientsRepository,
  ],
})
export class DatabaseModule {}
