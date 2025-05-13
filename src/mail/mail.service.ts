import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;
  constructor(
    private configService: ConfigService
  ) {
    // Khởi tạo transporter
    this.transporter = nodemailer.createTransport({
      host: this.configService.get<string>("EMAIL_HOST"),
      secure: false,
      auth: {
        user: this.configService.get<string>("EMAIL_USER"), // Email gửi OTP
        pass: this.configService.get<string>("EMAIL_PASSWORD"),    // App password
      },
    });
  }

  // Gửi email OTP
  async sendEmail(to: string) {
    const mailOptions = {
      from: '"Support" <support@gmail.com>',
      to,
      subject: 'Order confirmation',
      text: `Bạn đã đặt hàng thành công!`,
      html: `
        <h2>Order confirmation</h2>
        <p style="font-size: 20px; color: green;"><b>Bạn đã đặt hàng thành công!</b></p>
      `,
    };

    await this.transporter.sendMail(mailOptions);
  }
}