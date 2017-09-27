import {Member} from './member';
import {MEMBERS} from './mock-members';
import {Injectable} from '@angular/core';

@Injectable()
export class MemberService {
  getMembers(): Promise<Member[]> {
    return Promise.resolve(MEMBERS);
  }

  getMember(id: number): Promise<Member> {
    return this.getMembers()
      .then(members => members.find(member => member.id === id));
  }
}
