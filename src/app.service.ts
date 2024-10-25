import { Injectable, NotFoundException } from '@nestjs/common'

@Injectable()
export class AppService {
  private users: Record<string, unknown>[] = [{ name: 'prueba' }]

  getUser(name: string): Record<string, unknown> {
    const user = this.users.find((user) => user.name === name)

    if (!user) {
      throw new NotFoundException()
    }
    return user
  }

  getUsers(): Record<string, unknown>[] {
    return this.users
  }

  createUser(user: Record<string, unknown>) {
    this.users.push(user)
  }
}
