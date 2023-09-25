import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SuccessIndicatorDTO } from './successIndicator.schema';
import { SuccessIndicator } from './successIndicator.entity';

@Controller('success-indicators')
export class SuccessIndicatorController {
  @Post()
  async create(
    @Body() successIndicator: SuccessIndicatorDTO,
  ): Promise<SuccessIndicatorDTO> {
    try {
      return await SuccessIndicator.create({
        title: successIndicator.title,
        target_measure: successIndicator.target_measure,
        actual_accomplishment: successIndicator.actual_accomplishment,
        ql_qn: successIndicator.ql_qn,
        timeliness: successIndicator.timeliness,
        average: successIndicator.average,
        remarks: successIndicator.remarks,
      }).save();
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Get(':id')
  async read(@Param('id') id: string): Promise<SuccessIndicatorDTO> {
    try {
      return await SuccessIndicator.findOneOrFail({
        where: {
          id: Number(id),
        },
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() successIndicator: SuccessIndicatorDTO,
  ): Promise<SuccessIndicatorDTO> {
    try {
      return await SuccessIndicator.save({
        id: Number(id),
        ...successIndicator,
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string): Promise<null> {
    try {
      await SuccessIndicator.delete(Number(id));
      return null;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
