export class Member {
  id: number;
  email: string;
  password: string;
  desc: string;

  constructor(id: number,
              email: string,
              password: string,
              desc: string) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.desc = desc;
  }
}
