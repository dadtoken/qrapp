import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService, AlertService, BusyService} from './../../services/index';
import { Feedback } from './../../models/feedback.model';
@Component({
  selector: 'app-feedback-admin',
  templateUrl: './feedback-admin.component.html',
  styleUrls: ['./feedback-admin.component.scss']
})
export class FeedbackAdminComponent implements OnInit {
  feedbackList: Array<Feedback>;
   constructor(
        private router: Router,
        private feedbackService: FeedbackService,
        private alertService: AlertService,
        private busyService: BusyService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll(){
    this.busyService.show();
    this.feedbackService.getAll()
      .subscribe(
        data => {
          this.busyService.hide();
          this.feedbackList = data;
        },
        error => {
          this.busyService.hide();
          this.alertService.error('Nie można pobrać odpowiedzi!');
        }
      )
  }
}
