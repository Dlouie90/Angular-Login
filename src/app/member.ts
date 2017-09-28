export class Member {
  id: number;
  email: string;
  password: string;
  desc: string;

  constructor(email: string,
              password: string,
              desc: string) {
    this.email = email;
    this.password = password;
    this.desc = desc;
  }
}


