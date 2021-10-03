# Imports
from rest_framework.generics import (
    CreateAPIView,  # create one
    RetrieveAPIView,  # get one (filter)
    ListAPIView,  # get all (filter)
    RetrieveUpdateAPIView,  # update one
    DestroyAPIView,  # delete one
)
from users.controller.user_controller import (
    CustomUser, CustomUserSerializer, UserController)
class UserCreate(CreateAPIView):
    """View to Create Users"""
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer



class UserLoadJsonUserBulk(CreateAPIView):
    """View to create bulk users"""
    user_controller = UserController()
    #user_controller.load_seed_users()




class UserDetail(RetrieveAPIView):
    """View to Retrive a Users and acumulated sells by employes"""
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer




class UserList(ListAPIView):
    """View to List a Users"""
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer


class UserUpdate(RetrieveUpdateAPIView):
    """View to Update a Users"""
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer


class UserDelete(DestroyAPIView):
    """View to Delete a Users"""
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer