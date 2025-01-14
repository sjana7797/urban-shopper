import { BadRequestException, Injectable } from '@nestjs/common';
import path from 'path';
import sharp from 'sharp';
import fs from 'fs';

@Injectable()
export class UploadService {
  async uploadImage(file: Express.Multer.File) {
    // Define the folder and file path
    const folderPath = path.join(
      __dirname,
      '../../../../../temp-data/resources/images',
    );
    const fileName = `${this.removeExtension(file.originalname)}.webp`;

    const filePath = path.join(folderPath, fileName);

    const doesFileExist = fs.existsSync(filePath);

    // check if file already exists
    if (doesFileExist) {
      throw new BadRequestException('File already exists');
    }

    //  transform image to webp
    const webpBuffer = await sharp(file.buffer).webp().toBuffer();

    // Ensure the folder exists
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    // Write the WebP image to the file
    fs.writeFileSync(filePath, webpBuffer);

    console.log(`File saved at: ${filePath}`, file);

    const fileUrl = `images/${fileName}`;

    const fileUrlWithPath = `http://localhost:8000/${fileUrl}`;

    return {
      url: fileUrlWithPath,
      name: this.removeExtension(fileName),
      extension: 'webp',
    };
  }

  removeExtension(originalName: string) {
    return originalName.replace(/\.[^/.]+$/, '');
  }
}
