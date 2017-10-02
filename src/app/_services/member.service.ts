import {Member} from '../_models/member';
import {MEMBERS} from '../mock-members';
import {Injectable} from '@angular/core';

@Injectable()
export class MemberService {
  members: Member[] = MEMBERS;

  getMembers(): Promise<Member[]> {
    return Promise.resolve(this.members);
  }

  getMember(id: number): Promise<Member> {
    return this.getMembers()
      .then(members => members.find(member => member.id === id));
  }

  addMember(member: Member): void {
    this.members.push(member);
  }
}
