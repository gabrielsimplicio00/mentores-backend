import { applyDecorators, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { BadRequestSwagger } from '../../bad-request.swagger';
import { NotFoundSwagger } from '../../not-found.swagger';

export function SwaggerRestoreAccount() {
  return applyDecorators(
    ApiResponse({
      status: HttpStatus.OK,
      description: 'Exemplo do retorno de sucesso da rota',
      type: NotFoundSwagger,
    }),
    ApiResponse({
      status: HttpStatus.BAD_REQUEST,
      description: 'Modelo de erro',
      type: BadRequestSwagger,
    }),
    ApiOperation({
      summary:
        'Rota para redefinir a senha do usuário que passou pelo processo de recuperação de conta',
    }),
  );
}
