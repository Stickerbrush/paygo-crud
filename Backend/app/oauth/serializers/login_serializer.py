from django.contrib.auth import authenticate
from rest_framework import serializers
from utils.oauth.oauth_manager import UserManager
from utils.server.rest_utils import ApiRestUtilities
from users.serializers.user_serializer import CustomUserSerializer

# Parser class used for handling the login process
class LoginSerializer(serializers.Serializer):

    email = serializers.EmailField()
    password = serializers.RegexField(regex="", min_length=8, max_length=128)
    def __init__(self, **kwargs):
        super().__init__(**kwargs)


    #validate: checks the credentials to see if they match with the database
    def validate(self, data):
        user = authenticate(username=data['email'],
                            password=data['password'])
        if not user:
            ApiRestUtilities.get_rest__validation_error_response(
                'Invalid credentials',
                'email',
                400
            )
        else:
            self.context['user'] = user
            return data

    #create: if the validation process is successful, creates an access token
    def create(self, data):
        if self.validate(data) is not None:
            user = self.context['user']
            return CustomUserSerializer(user).data, UserManager.create_token(user)



