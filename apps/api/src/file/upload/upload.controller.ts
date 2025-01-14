import {
  Controller,
  FileTypeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { UploadService } from "./upload.service";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("file/upload")
export class UploadController {
  constructor(private readonly fileService: UploadService) {}

  @Post("image")
  @UseInterceptors(FileInterceptor("file"))
  async uploadImage(
    @UploadedFile(
      new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: "image/*" })],
      }),
    )
    file: Express.Multer.File,
  ) {
    return this.fileService.uploadImage(file);
  }
}
