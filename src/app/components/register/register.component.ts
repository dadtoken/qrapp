import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, AlertService, BusyService} from './../../services/index';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        private busyService: BusyService) { }

    register() {
        this.loading = true;
        this.busyService.show();
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.busyService.hide();
                    this.alertService.success('Rejestracja pomyślna!', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.busyService.hide();
                    this.alertService.error(error._body);
                    this.loading = false;
                });
    }
}
