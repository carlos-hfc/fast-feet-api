import { FakeHasher } from "test/cryptography/fake-hasher"
import { makeDeliveryman } from "test/factories/make-deliveryman"
import { InMemoryDeliverymansRepository } from "test/repositories/in-memory-deliverymans-repository"

import { FetchDeliverymansUseCase } from "./fetch-deliverymans"

let fakeHasher: FakeHasher
let inMemoryDeliverymansRepository: InMemoryDeliverymansRepository
let sut: FetchDeliverymansUseCase

describe("FetchDeliverymansUseCase", () => {
  beforeEach(() => {
    fakeHasher = new FakeHasher()
    inMemoryDeliverymansRepository = new InMemoryDeliverymansRepository()
    sut = new FetchDeliverymansUseCase(inMemoryDeliverymansRepository)
  })

  it("should be able to list all deliverymans", async () => {
    await inMemoryDeliverymansRepository.create(makeDeliveryman())
    await inMemoryDeliverymansRepository.create(makeDeliveryman())
    await inMemoryDeliverymansRepository.create(makeDeliveryman())

    const result = await sut.execute()

    expect(result.isRight()).toBe(true)
    expect(result.value?.deliverymans).toHaveLength(3)
    expect(result.value).toEqual({
      deliverymans: inMemoryDeliverymansRepository.items,
    })
  })
})
