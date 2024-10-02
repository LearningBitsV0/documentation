
import { Transform } from 'class-transformer';
import { IsString ,IsBoolean,IsInt, IsOptional,IsArray,ArrayMinSize,ValidateNested,IsDefined,IsNotEmpty,ValidateIf } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateDocumentDto {

    @IsDefined()      // Property must be present (not null or undefined)
    @IsNotEmpty()      // Property must not be an empty string
    @IsString()
    title: string;

    @IsOptional()
    @IsArray() 
    @Type(() => CreateDocumentDto) // Ensures nested objects in subPages are also validated
    @ValidateNested({ each: true })
    subPages: CreateDocumentDto[];

    @IsBoolean()
    is_folder:boolean

    @ValidateIf((o) => !o.is_folder)  // Apply validation if `is_folder` is false
    @IsDefined({message:'data should not be null or undefined'})
    data:any

}