import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService, ObjectService, AlertService, BusyService,WordService } from './../../services/index';
import { User } from './../../models/user.model';
import { Object } from './../../models/object.model';


@Component({
  selector: 'app-object',
  templateUrl: './object.create.component.html',
  styleUrls: ['./object.create.component.scss']
})
export class ObjectCreateComponent {
  currentUser: User;
  model: any = {};
  loading = false;
  passError = false;

  constructor(
    private userService: UserService,
    private objectService: ObjectService,
    private alertService: AlertService,
    private busyService: BusyService,
    private wordService: WordService,
    private router: Router
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  addObject() {
    if (this.passError){
      this.alertService.error("Passphrase musi mieć 12 słów!");
      return;
    }
     this.busyService.show();
    const date = new Date();
    this.loading = true;
    this.model.passphraseFind = this.model.passphraseDisplay.toLowerCase();
    this.model.passphraseFind = this.escapeDiacritics(this.model.passphraseFind);
    const str  = this.model.passphrase;
    this.model.qrCode = this.model.description + date.getTime();
    this.model.firstOwner = this.currentUser._id;
    this.model.currentOwner = this.currentUser._id;
    const minutes = date.getMinutes();
    let minutesString = '' + minutes;
    if (minutes < 10){
      minutesString = '0' + minutes;
    }
    this.model.ownersList = [{user: this.currentUser._id, time: date.getDate() + '-' + (date.getMonth() * 1 + 1) + '-'
    + date.getFullYear() + ' ' + date.getHours() + ':' + minutesString}];
    this.objectService.create(this.model)
      .subscribe(
        data => {
          this.busyService.hide();
          this.alertService.success('Dodano przedmiot!', true);
          this.router.navigate(['/']);
        },
        error => {
          this.busyService.hide();
          this.alertService.error(error._body);
          this.loading = false;
      });
  }
  validate(event: any){
      this.model.passphraseDisplay = event.target.value;
      // const patt = /(\w+\W+){11}(\w+)/;
      if (this.model.passphraseDisplay[this.model.passphraseDisplay.length - 1] === ' '){
        this.model.passphraseDisplay = this.model.passphraseDisplay.slice(0, -1);
      }
      const res = this.model.passphraseDisplay.split(' ');
      if(res.length === 12){
        this.passError = false;
      } else {
        this.passError = true;
        }
      // !patt.test(this.passphrase);
  }
  escapeDiacritics(string: string){
    return string.replace(/ą/g, 'a').replace(/Ą/g, 'A')
        .replace(/ć/g, 'c').replace(/Ć/g, 'C')
        .replace(/ę/g, 'e').replace(/Ę/g, 'E')
        .replace(/ł/g, 'l').replace(/Ł/g, 'L')
        .replace(/ń/g, 'n').replace(/Ń/g, 'N')
        .replace(/ó/g, 'o').replace(/Ó/g, 'O')
        .replace(/ś/g, 's').replace(/Ś/g, 'S')
        .replace(/ż/g, 'z').replace(/Ż/g, 'Z')
        .replace(/ź/g, 'z').replace(/Ź/g, 'Z');
  }
  getRandomWords(){
    this.busyService.show();
    this.wordService.getTwelve()
      .subscribe(
        words => {
          this.busyService.hide();
          this.alertService.success('Pobrano losowe słowa!');
          this.model.passphraseDisplay = '';
          for (const word of words) {
            this.model.passphraseDisplay += word + ' ';
          }
          this.model.passphraseDisplay = this.model.passphraseDisplay.slice(0, -1);
        },
        error => {
          this.alertService.error('Nie można pobrać losowych słów!');
          this.busyService.hide();
        });
  }
}
