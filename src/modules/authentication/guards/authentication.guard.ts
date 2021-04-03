import {
  Injectable,
  CanActivate,
  ExecutionContext,
} from '@nestjs/common';
import axios from 'axios';


@Injectable()
export default class AuthGuard implements CanActivate {
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token: string = request.headers['x-accesstoken'];
    const { data, status } = await axios({
      method: 'get',
      url: 'http://localhost:3000/authentication/me',
      headers: {
        'X-AccessToken': token,
      },
    });

    if (status === 200) {
      request.user = data;
    }

    return true;
  }
}
