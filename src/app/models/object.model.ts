import {User} from './user.model';
export class Object {
    _id: string;
    name: string;
    qrCode: string;
    passphraseDisplay: string;
    passphraseFind: string;
    description: string;
    currentOwner: User;
    firstOwner: User;
    ownersList: [{user: User, time: Date}];
    shared: boolean;
}
