import { Recipient } from "../../enterprise/entities/recipient"

export abstract class RecipientsRepository {
  abstract findByCpf(cpf: string): Promise<Recipient | null>
  abstract save(recipient: Recipient): Promise<void>
  abstract create(recipient: Recipient): Promise<void>
}
