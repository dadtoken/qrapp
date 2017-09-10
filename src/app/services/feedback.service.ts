import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Feedback } from './../models/feedback.model';

@Injectable()
export class FeedbackService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/api/feedback', this.jwt()).map((response: Response) => response.json());
    }
    create(feedback: Feedback) {
        return this.http.post('/api/feedback/add', feedback, this.jwt());
    }
    private jwt() {
        // create authorization header with jwt token
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            const headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
