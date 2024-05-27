import { UniqueEntityID } from "@/core/entities/unique-entity-id"
import { Order, OrderProps } from "@/domain/delivery/enterprise/entities/order"

export function makeOrder(
  override: Partial<OrderProps> = {},
  id?: UniqueEntityID,
) {
  return Order.create(
    {
      recipientId: new UniqueEntityID(),
      status: "waiting",
      ...override,
    },
    id,
  )
}
