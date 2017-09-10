import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService, AlertService, BusyService} from './../../services/index';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private feedbackService: FeedbackService,
        private alertService: AlertService,
        private busyService: BusyService) { }

    sendFeedback() {
        this.loading = true;
        this.busyService.show();
        this.feedbackService.create(this.model)
            .subscribe(
                data => {
                    this.busyService.hide();
                    this.alertService.success('Dziękujemy za opinię!', true);
                    this.router.navigate(['/']);
                },
                error => {
                    this.busyService.hide();
                    this.alertService.error(error._body);
                    this.loading = false;
                });
    }

}
