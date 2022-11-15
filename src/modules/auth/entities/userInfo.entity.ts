import { Exclude } from 'class-transformer'

export class userInfoEntities {
  @Exclude()
  password: string
  constructor(partial: any) {
    Object.assign(this, partial)
  }
}
