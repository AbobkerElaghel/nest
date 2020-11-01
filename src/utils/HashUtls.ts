import { hash, compare, genSalt } from 'bcrypt';

export default class HashUtls {


  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}; // creating objects from this class is not allowed

  public static createSalt(): Promise<string>{
    return genSalt(11);
  };

  public static hashPassword(password: string, saltOrRounds : string | number = 11): Promise<string>{
    return hash(password, saltOrRounds);
  };

  public static comparePassword(attempt: string, hash: string): Promise<boolean>{
    return compare(attempt, hash);
  };
}
