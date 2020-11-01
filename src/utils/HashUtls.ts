import { hash, compare, genSalt } from 'bcrypt';

export default class HashUtls {
  public static createSalt(): Promise<string>{
    return genSalt(11);
  }

  public static hashPassword(password: string, saltOrRounds : string | number = 11): Promise<string>{
    return hash((password + process.env.PAPPER), saltOrRounds);
  }

  public static comparePassword(attempt: string, hash: string): Promise<boolean>{
    return compare(attempt, hash);
  }
}
