import { Component, OnInit } from '@angular/core';
import { User } from './../../models/user.model';
import { UserService, ObjectService, AlertService, BusyService } from './../../services/index';
const QrCode = require('./../../../../node_modules/qrcode-reader/dist/index.js');


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  objects: Object[] = [];
  historyObjects: Object[] = [];
  sharedObjects: Object[] = [];
  qrFile = '';
  qr = new QrCode();
  passphrase = '';
  passError = false;

  constructor(private userService: UserService, private objectService: ObjectService,
    private alertService: AlertService, private busyService: BusyService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadAllObjects();
    this.loadAllHistoryObjects();
    this.loadAllSharedObjects();
  }

  // deleteUser(_id: string) {
  //     this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
  // }

  private loadAllObjects() {
    this.busyService.show();
    this.objectService.getAll().subscribe(
      objects => {
        this.busyService.hide();
        this.objects = objects;
      },
      error => {
        this.busyService.hide();
        this.alertService.error(error._body);
      });
  }

  private loadAllHistoryObjects() {
    this.busyService.show();
    this.objectService.getAllWithHistory().subscribe(
      objects => {
        this.busyService.hide();
        this.historyObjects = objects;
      },
      error => {
         this.busyService.hide();
         this.alertService.error(error._body);
        });
  }
  private loadAllSharedObjects() {
    this.busyService.show();
    this.objectService.getAllShared().subscribe(
      objects => {
        this.busyService.hide();
        this.sharedObjects = objects;
      },
      error => {
         this.busyService.hide();
         this.alertService.error(error._body);
        });
  }

  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    this.busyService.show();
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();
    let dataSource = '';
    const _this = this;
    _this.qr.callback = function(err, result) {
      if (result) {
        _this.qrFile = result.result;
        _this.objectService.updateOwnerByQr(_this.qrFile)
        .subscribe(
          data => {
            _this.busyService.hide();
            _this.alertService.success('Przejąłeś przedmiot!');
            _this.loadAllObjects();
            _this.loadAllHistoryObjects();
          },
          error => {
            _this.busyService.hide();
            _this.alertService.error('Coś poszło nie tak, spróbuj jeszcze raz!');
         });

      } else {
         _this.busyService.hide();
        _this.alertService.error('Coś poszło nie tak, spróbuj jeszcze raz!');
      }
      return;
    }
    myReader.onloadend = function(e) {
      dataSource = myReader.result;
      _this.qr.decode(myReader.result);
    }
    myReader.readAsDataURL(file);
    this.qrFile = dataSource;

  }
  updateByPassphrase (){
     this.busyService.show();
     let passphrase = this.passphrase.toLowerCase();
     passphrase = this.escapeDiacritics(passphrase);
     this.objectService.updateOwnerByPassphrase(passphrase)
        .subscribe(
          data => {
            this.busyService.hide();
            this.alertService.success('Przejąłeś przedmiot!');
            this.loadAllObjects();
            this.loadAllHistoryObjects();
          },
          error => {
            this.busyService.hide();
            if(error._body === 'Podana fraza jest błędna lub nie ma takiego obiektu!') {
              this.alertService.error('Podana fraza jest błędna lub nie ma takiego obiektu!');
            } else {
            this.alertService.error('Coś poszło nie tak, spróbuj jeszcze raz!');
            }
         });
  }
  validate(event: any){
      this.passphrase = event.target.value;
      // const patt = /(\w+\W+){11}(\w+)/;
      if (this.passphrase[this.passphrase.length - 1] === ' '){
        this.passphrase = this.passphrase.slice(0, -1);
      }
      const res = this.passphrase.split(' ');
      if (res.length === 12){
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

}
