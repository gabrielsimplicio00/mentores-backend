import { applyDecorators, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { NotFoundSwagger } from '../../not-found.swagger';
import { BadRequestSwagger } from '../../bad-request.swagger';

export function SwaggerEditTestimony() {
  return applyDecorators(
    ApiResponse({
      status: HttpStatus.CREATED,
      description: 'Exemplo do retorno de sucesso da rota',
      type: NotFoundSwagger,
    }),
    ApiResponse({
      status: HttpStatus.BAD_REQUEST,
      description: 'Modelo de erro',
      type: BadRequestSwagger,
    }),
    ApiOperation({
      summary: 'Rota para atualizar depoimento',
    }),
  );
}
