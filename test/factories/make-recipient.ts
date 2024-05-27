import { faker } from "@faker-js/faker"

import { UniqueEntityID } from "@/core/entities/unique-entity-id"
import {
  Recipient,
  RecipientProps,
} from "@/domain/delivery/enterprise/entities/recipient"

export function makeRecipient(
  override: Partial<RecipientProps> = {},
  id?: UniqueEntityID,
) {
  return Recipient.create(
    {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      latitude: faker.location.latitude(),
      longitude: faker.location.longitude(),
      zipCode: faker.location.zipCode(),
      address: faker.location.streetAddress(),
      district: faker.location.county(),
      city: faker.location.city(),
      state: faker.location.state(),
      ...override,
    },
    id,
  )
}
