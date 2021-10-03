# Imports
from rest_framework.generics import (
    CreateAPIView,  # create one
    RetrieveAPIView,  # get one (filter)
    ListAPIView,  # get all (filter)
    RetrieveUpdateAPIView,  # update one
    DestroyAPIView,  # delete one
)

from users.controller.user_controller import UserController
from users.models.users import CustomUser
from users.serializers.user_serializer import CustomUserSerializer




class UserDetailByEmployeeId(RetrieveAPIView):
    """View to Retrive a Users"""
    lookup_field = "numero_empleado"

    def get(self, request, *args, **kwargs):

        employed_number: int = kwargs['numero_empleado']
        controller = UserController()
        data = controller.get_employee_data(employed_number)
