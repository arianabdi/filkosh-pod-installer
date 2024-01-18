import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  const config = new DocumentBuilder()
      .setTitle('`Filkosh Pod Installer`')
      .setDescription('A service for installing new version of Filkosh-Pod')
      .addBearerAuth()
      .setVersion('1.0.0')
      .addTag('')
      .build();


  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3057);
}
bootstrap();
