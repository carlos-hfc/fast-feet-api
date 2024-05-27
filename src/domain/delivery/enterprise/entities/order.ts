import { Entity } from "@/core/entities/entity"
import { UniqueEntityID } from "@/core/entities/unique-entity-id"
import { Optional } from "@/core/types/optional"

export type OrderStatus = "waiting" | "collected" | "deliverymaned" | "returned"

export interface OrderProps {
  deliverymanId?: UniqueEntityID | null
  recipientId: UniqueEntityID
  status: OrderStatus
  collectedAt?: Date | null
  deliverymanedAt?: Date | null
  returnedAt?: Date | null
  createdAt: Date
  updatedAt?: Date | null
}

export class Order extends Entity<OrderProps> {
  get deliverymanId() {
    return this.props.deliverymanId
  }

  get recipientId() {
    return this.props.recipientId
  }

  get status() {
    return this.props.status
  }

  get collectedAt() {
    return this.props.collectedAt
  }

  get deliverymanedAt() {
    return this.props.deliverymanedAt
  }

  get returnedAt() {
    return this.props.returnedAt
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  private touch() {
    this.props.updatedAt = new Date()
  }

  set status(status: OrderStatus) {
    this.props.status = status

    switch (status) {
      case "collected":
        this.props.collectedAt = new Date()
        this.touch()
        break
      case "deliverymaned":
        this.props.deliverymanedAt = new Date()
        this.touch()
        break
      case "returned":
        this.props.returnedAt = new Date()
        this.touch()
        break
    }
  }

  static create(
    props: Optional<OrderProps, "createdAt" | "status">,
    id?: UniqueEntityID,
  ) {
    const order = new Order(
      {
        ...props,
        status: props.status ?? "waiting",
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )

    return order
  }
}
