import { Deliver } from "../../enterprise/entities/deliver"

export abstract class DeliversRepository {
  abstract findById(id: string): Promise<Deliver | null>
  abstract save(deliver: Deliver): Promise<void>
  abstract create(deliver: Deliver): Promise<void>
  abstract delete(deliver: Deliver): Promise<void>
}
