import { Logger, INestApplication } from "@nestjs/common"
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

export function setUpSwagger(app: INestApplication): any {
  const logger: Logger = new Logger('Swagger');

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  logger.log(`Agregando swagger en el empoint api` );
}