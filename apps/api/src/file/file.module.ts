import { Module } from "@nestjs/common";
import { UploadModule } from "./upload/upload.module";

@Module({
  imports: [UploadModule],
  providers: [],
  controllers: [],
})
export class FileModule {}
