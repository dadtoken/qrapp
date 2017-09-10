import {User} from './user.model';
export class Feedback {
    _id: string;
    question1: string;
    question2: string;
    owner: User;
}
