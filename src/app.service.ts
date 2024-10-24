import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  private users: Record<string, unknown>[] = []

  getUsers(): Record<string, unknown>[] {
    return this.users
  }

  createUser(user: Record<string, unknown>) {
    this.users.push(user)
  }
}
