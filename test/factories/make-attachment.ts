import { faker } from "@faker-js/faker"

import { UniqueEntityID } from "@/core/entities/unique-entity-id"
import {
  Attachment,
  AttachmentProps,
} from "@/domain/delivery/enterprise/entities/attachment"

export function makeAttachment(
  override: Partial<AttachmentProps> = {},
  id?: UniqueEntityID,
) {
  return Attachment.create(
    {
      title: faker.lorem.slug(),
      url: faker.internet.url(),
      ...override,
    },
    id,
  )
}
