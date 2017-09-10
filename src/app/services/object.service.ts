import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Object } from './../models/object.model';

@Injectable()
export class ObjectService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/api/objects', this.jwt()).map((response: Response) => response.json());
    }
    getAllWithHistory() {
        return this.http.get('/api/objects/withHistory', this.jwt()).map((response: Response) => response.json());
    }
    getAllShared() {
        return this.http.get('/api/objects/allShared', this.jwt()).map((response: Response) => response.json());
    }

    getById(_id: string) {
        return this.http.get('/api/objects/' + _id, this.jwt()).map((response: Response) => response.json());
    }

    create(object: Object) {
        return this.http.post('/api/objects/add', object, this.jwt());
    }

    update(object: Object) {
        return this.http.put('/api/objects/' + object._id, object, this.jwt());
    }
    share(_id: string) {
        return this.http.put('/api/objects/share/' + _id, null, this.jwt());
    }
    unShare(_id: string) {
        return this.http.put('/api/objects/unShare/' + _id, null, this.jwt());
    }
    updateOwnerByQr(qrString: string){
      const data = {'qrCodeString' : qrString }
      return this.http.put('/api/objects', data, this.jwt());
    }
    updateOwnerByPassphrase(passphrase: string){
      const data = {'passphrase' : passphrase }
      return this.http.put('/api/objects/passphrase', data, this.jwt());
    }

    delete(_id: string) {
        return this.http.delete('/api/objects/' + _id, this.jwt());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
