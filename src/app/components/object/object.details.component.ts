import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService, ObjectService, AlertService, BusyService } from './../../services/index';
import { User } from './../../models/user.model';
import { Object } from './../../models/object.model';
import { PdfmakeService } from 'ng-pdf-make/pdfmake/pdfmake.service';
// const PdfMake = require('pdfmake');
@Component({
  selector: 'app-object',
  templateUrl: './object.details.component.html',
  styleUrls: ['./object.details.component.scss']
})
export class ObjectDetailsComponent implements OnInit {
  // @ViewChild('qrCode') qrCode: ElementRef;
  currentUser: User;
  object: Object;
  loading = false;
  id;
  canEdit = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private objectService: ObjectService,
    private alertService: AlertService,
    private busyService: BusyService,
    private router: Router,
    private qrCode: ElementRef,
    private pdfmake: PdfmakeService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loading = true;
    this.busyService.show();
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.objectService.getById(this.id)
      .subscribe(
      data => {
        this.busyService.hide();
        this.object = data;
        this.canEdit = this.currentUser._id === data.currentOwner;
        this.loading = false;
      },
      error => {
        this.busyService.hide();
        this.alertService.error(error._body);
        this.loading = false;
      });
  }
  delete() {
    this.busyService.show();
    this.loading = true;
    this.objectService.delete(this.id)
      .subscribe(
      data => {
        this.busyService.hide();
        this.alertService.success('Usunięto przedmiot!', true);
        this.router.navigate(['/']);
      },
      error => {
        this.busyService.hide();
        this.alertService.error(error._body);
        this.loading = false;
      });
  }
  share() {
    this.busyService.show();
    this.loading = true;
    this.objectService.share(this.id)
      .subscribe(
      data => {
        this.busyService.hide();
        this.alertService.success('Przedmiot jest dostępny do wypożyczenia!', true);
        this.router.navigate(['/']);
      },
      error => {
        this.busyService.hide();
        this.alertService.error(error._body);
        this.loading = false;
      });
  }
  unShare() {
    this.busyService.show();
    this.loading = true;
    this.objectService.unShare(this.id)
      .subscribe(
      data => {
        this.busyService.hide();
        this.alertService.success('Przedmiot nie jest już dostępny do wypożyczenia!', true);
        this.router.navigate(['/']);
      },
      error => {
        this.busyService.hide();
        this.alertService.error(error._body);
        this.loading = false;
      });
  }
  printQRCode() {
    this.busyService.show();
      let dataImage = this.qrCode.nativeElement.querySelector('img');
      dataImage = dataImage.src;
      this.pdfmake.addText(this.object.passphraseDisplay);
      this.pdfmake.addText(' ');
      this.pdfmake.docDefinition.content.push(
        {
          image: dataImage,
          width: 150
        });
      this.pdfmake.download('qrCode.pdf');
      this.pdfmake.docDefinition.content.length = 0;
      this.busyService.hide();
  }
}
