import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthenticationService, AlertService, BusyService} from './../../services/index';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private busyService: BusyService
      ) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.busyService.show();
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.busyService.hide();
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.busyService.hide();
                    this.alertService.error(error._body);
                    this.loading = false;
                });
    }
}
