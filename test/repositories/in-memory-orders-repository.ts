import { OrdersRepository } from "@/domain/delivery/application/repositories/orders-repository"
import { Order } from "@/domain/delivery/enterprise/entities/order"

export class InMemoryOrdersRepository implements OrdersRepository {
  public items: Order[] = []

  async findAll(): Promise<Order[]> {
    return this.items
  }

  async findManyByDeliverymanId(deliverymanId: string): Promise<Order[]> {
    return this.items
  }

  async findById(id: string): Promise<Order | null> {
    return this.items.find(item => item.id.toString() === id) ?? null
  }

  async save(order: Order): Promise<void> {
    const itemIndex = this.items.findIndex(item => item.id === order.id)

    this.items[itemIndex] = order
  }

  async create(order: Order): Promise<void> {
    this.items.push(order)
  }

  async delete(order: Order): Promise<void> {
    const itemIndex = this.items.findIndex(item => item.id === order.id)

    this.items.splice(itemIndex, 1)
  }
}
