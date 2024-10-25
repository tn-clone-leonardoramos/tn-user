import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'

import { AppModule } from '@app/app.module'

describe('AppController (e2e)', () => {
  let app: INestApplication

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  it('/healthcheck (GET)', () => {
    return request(app.getHttpServer()).get('/healthcheck').expect(200)
  })

  it('/users (GET)', () => {
    return request(app.getHttpServer()).get('/users').expect(200)
  })

  it('/users (POST)', () => {
    return request(app.getHttpServer()).post('/users').send({ name: 'test' }).expect(201)
  })

  it('/users/:name (GET)', () => {
    return request(app.getHttpServer()).get('/users/test').expect(404)
  })
})
