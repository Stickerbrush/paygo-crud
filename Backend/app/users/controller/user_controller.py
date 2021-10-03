from users.serializers.user_serializer import (CustomUser,
                                               CustomUserSerializer,
                                               make_password)



class UserController(object):

    def __init__(self) -> None:
        super().__init__()


    def load_seed_users(self):
        print("wew")
#ValidationError
