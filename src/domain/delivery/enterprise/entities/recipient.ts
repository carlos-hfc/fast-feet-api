import { Entity } from "@/core/entities/entity"
import { UniqueEntityID } from "@/core/entities/unique-entity-id"

export interface RecipientProps {
  name: string
  email: string
  latitude: number
  longitude: number
  zipCode: string
  address: string
  complement?: string | null
  district: string
  city: string
  state: string
}

export class Recipient extends Entity<RecipientProps> {
  get name() {
    return this.props.name
  }

  get email() {
    return this.props.email
  }

  get latitude() {
    return this.props.latitude
  }

  get longitude() {
    return this.props.longitude
  }

  get zipCode() {
    return this.props.zipCode
  }

  get address() {
    return this.props.address
  }

  get complement() {
    return this.props.complement
  }

  get district() {
    return this.props.district
  }

  get city() {
    return this.props.city
  }

  get state() {
    return this.props.state
  }

  static create(props: RecipientProps, id?: UniqueEntityID) {
    const recipient = new Recipient(props, id)

    return recipient
  }
}
