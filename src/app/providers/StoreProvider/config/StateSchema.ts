import { CounterSchema } from 'entity/Counter';
import { UserSchema } from 'entity/User';
import { LoginSchema } from 'features/auth/byUsername';

export interface StateSchema {
   counter: CounterSchema,
   user: UserSchema,
   login: LoginSchema
}
