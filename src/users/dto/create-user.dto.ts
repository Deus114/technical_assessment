import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'Tên không được để trống' })
    name: string;

    @ApiProperty()
    @IsEmail({}, { message: 'Email không đúng định dạng' })
    @IsNotEmpty({ message: 'Email không được để trống' })
    email: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'Mật khẩu không được để trống' })
    password: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'Sđt không được để trống' })
    phone: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'Tỉnh không được để trống' })
    province: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'Huyện không được để trống' })
    district: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'Xã không được để trống' })
    commune: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'Địa chỉ không được để trống' })
    address: string;

    @ApiProperty()
    role: "USER" | "ADMIN"
}

export class RegisterUserDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'Tên không được để trống' })
    name: string;

    @ApiProperty()
    @IsEmail({}, { message: 'Email không đúng định dạng' })
    @IsNotEmpty({ message: 'Email không được để trống' })
    email: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'Mật khẩu không được để trống' })
    password: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'Sđt không được để trống' })
    phone: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'Tỉnh không được để trống' })
    province: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'Huyện không được để trống' })
    district: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'Xã không được để trống' })
    commune: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'Địa chỉ không được để trống' })
    address: string;

    @ApiProperty()
    role: "ADMIN" | "USER";
}

export class UserLoginDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'user@gmail.com | admin@gmail.com' })
    username: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: '123456',
    })
    password: string;

}
