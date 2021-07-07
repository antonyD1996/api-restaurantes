import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //await app.listen(3000);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Api Restaurantes')
    .setDescription('Esta es una api que se utiliza para poder agregar restaurantes, y agregarle opiniones a cada uno de ellos. Tambien provee informacion de cada restaurante con su calificacion, mejor y por opinion')
    .setVersion('1.0')
    .addTag('restaurantes')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3000);
}




bootstrap();
