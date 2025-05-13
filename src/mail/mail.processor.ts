import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { MailService } from './mail.service';

@Processor('mail-queue')
export class MailProcessor {
    constructor(private mailService: MailService) { }

    @Process('send-confirmation')
    async handleConfirmationEmail(job: Job<{ email: string }>) {
        const { email } = job.data;
        await this.mailService.sendEmail(email);
    }
}