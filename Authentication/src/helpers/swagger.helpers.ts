import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const configSwagger = (app: INestApplication, packageJson: any) => {
  const config = new DocumentBuilder()
    .setTitle(packageJson.system)
    .setVersion(packageJson.version)
    .setDescription(packageJson.description)
    //.setContact(packageJson.contact.name, '', packageJson.contact)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    customSiteTitle: packageJson.system,
    customfavIcon: '../assets/images/favicon.ico',
    customCss: `
         .swagger-ui .topbar { display: none; }
         .swagger-ui .info { margin: 20px 0;}
         .swagger-ui .info hgroup.main { margin: 0 0 0;}
         .title span { display: block; }
    `,
  });
};
