import { faker } from "@faker-js/faker"

import { UniqueEntityID } from "@/core/entities/unique-entity-id"
import {
  Deliveryman,
  DeliverymanProps,
} from "@/domain/delivery/enterprise/entities/deliveryman"

export function makeDeliveryman(
  override: Partial<DeliverymanProps> = {},
  id?: UniqueEntityID,
) {
  return Deliveryman.create(
    {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      cpf: "12345678911",
      latitude: faker.location.latitude(),
      longitude: faker.location.longitude(),
      ...override,
    },
    id,
  )
}
