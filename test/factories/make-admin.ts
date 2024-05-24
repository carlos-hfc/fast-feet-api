import { faker } from "@faker-js/faker"

import { UniqueEntityID } from "@/core/entities/unique-entity-id"
import { Admin, AdminProps } from "@/domain/delivery/enterprise/entities/admin"

export function makeAdmin(
  override: Partial<AdminProps> = {},
  id?: UniqueEntityID,
) {
  return Admin.create(
    {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      cpf: "12345678911",
      ...override,
    },
    id,
  )
}
