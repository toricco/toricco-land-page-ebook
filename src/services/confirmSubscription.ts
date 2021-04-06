import { httpSubscription } from '.';
import { RequestError } from '../errors';

interface DTO {
  userToken: string;
}

interface ResponseApi {
  body: {
    is_active: boolean;
  };
}

export const confirmSubscription = async ({
  userToken,
}: DTO): Promise<boolean | RequestError> => {
  try {
    const { data } = await httpSubscription.get<ResponseApi>(
      '/subscription/is-active',
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      },
    );

    if (data.body.is_active) {
      return true;
    }

    return false;
  } catch (error) {
    if (error.response.data.body.errorNumber === 1007) {
      return false;
    }

    return new RequestError('Subscription api request error', 1000);
  }
};
