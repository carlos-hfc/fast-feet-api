import { makeDeliveryman } from "test/factories/make-deliveryman"
import { makeOrder } from "test/factories/make-order"
import { InMemoryDeliverymansRepository } from "test/repositories/in-memory-deliverymans-repository"
import { InMemoryOrdersRepository } from "test/repositories/in-memory-orders-repository"

import { UniqueEntityID } from "@/core/entities/unique-entity-id"
import { NotAllowed } from "@/core/errors/not-allowed"
import { ResourceNotFound } from "@/core/errors/resource-not-found"

import { MarkOrderAsDeliveredUseCase } from "./mark-order-as-delivered"

let inMemoryOrdersRepository: InMemoryOrdersRepository
let inMemoryDeliverymansRepository: InMemoryDeliverymansRepository
let sut: MarkOrderAsDeliveredUseCase

describe("MarkOrderAsDeliveredUseCase", () => {
  beforeEach(() => {
    inMemoryDeliverymansRepository = new InMemoryDeliverymansRepository()
    inMemoryOrdersRepository = new InMemoryOrdersRepository()
    sut = new MarkOrderAsDeliveredUseCase(inMemoryOrdersRepository)
  })

  it("should be able to mark an order as delivered", async () => {
    const deliveryman = makeDeliveryman()
    const order = makeOrder({
      status: "collected",
      deliverymanId: deliveryman.id,
    })

    await inMemoryDeliverymansRepository.create(deliveryman)
    await inMemoryOrdersRepository.create(order)

    const result = await sut.execute({
      orderId: order.id.toString(),
      deliverymanId: deliveryman.id.toString(),
    })

    expect(result.isRight()).toBe(true)
    expect(result.value).toMatchObject({
      order: expect.objectContaining({
        deliveredAt: expect.any(Date),
        status: "delivered",
        deliverymanId: deliveryman.id,
      }),
    })
  })

  it("should not be able to mark an inexistent order as delivered", async () => {
    const deliveryman = makeDeliveryman()

    await inMemoryDeliverymansRepository.create(deliveryman)

    const result = await sut.execute({
      orderId: "order-id",
      deliverymanId: deliveryman.id.toString(),
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(ResourceNotFound)
  })

  it("should not be able to mark an order as delivered if status is not collected", async () => {
    const deliveryman = makeDeliveryman()
    const order = makeOrder({
      status: "waiting",
    })

    await inMemoryDeliverymansRepository.create(deliveryman)
    await inMemoryOrdersRepository.create(order)

    const result = await sut.execute({
      orderId: order.id.toString(),
      deliverymanId: deliveryman.id.toString(),
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(NotAllowed)
  })

  it("should not be able to mark an order as delivered with another deliveryman", async () => {
    const deliveryman = makeDeliveryman({}, new UniqueEntityID("deliveryman-1"))
    const order = makeOrder({
      deliverymanId: deliveryman.id,
      status: "collected",
    })

    await inMemoryOrdersRepository.create(order)
    await inMemoryDeliverymansRepository.create(deliveryman)

    const result = await sut.execute({
      orderId: order.id.toString(),
      deliverymanId: "deliveryman-2",
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(NotAllowed)
  })
})
