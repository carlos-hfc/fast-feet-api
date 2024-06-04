import { Module } from "@nestjs/common"

import { AdminsRepository } from "@/domain/delivery/application/repositories/admins-repository"
import { DeliverymansRepository } from "@/domain/delivery/application/repositories/deliverymans-repository"

import { PrismaService } from "./prisma/prisma.service"
import { PrismaAdminsRepository } from "./prisma/repositories/prisma-admins-repository"
import { PrismaDeliverymansRepository } from "./prisma/repositories/prisma-deliverymans-repository"

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
  ],
  exports: [PrismaService, AdminsRepository, DeliverymansRepository],
})
export class DatabaseModule {}
