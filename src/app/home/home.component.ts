import {Component, OnInit} from '@angular/core';
import {Member} from '../member';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {MemberService} from '../member.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  member: Member;

  constructor(private memberService: MemberService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.memberService.getMember(+params.get('id')))
      .subscribe(member => this.member = member);
  }
}
