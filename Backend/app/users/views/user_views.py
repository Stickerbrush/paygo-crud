from users.controller.user_controller import UserController
from utils.server.rest_utils import ApiRestUtilities
from rest_framework.generics import (
    CreateAPIView,  # create one
    RetrieveAPIView,  # get one (filter)
    ListAPIView,  # get all (filter)
    RetrieveUpdateAPIView,  # update one
    DestroyAPIView,  # delete one
)

#View to retrieve the user data, with its subemployees (if any)
class UserDetailByEmployeeId(RetrieveAPIView):
    lookup_field = "numero_empleado"

    def get(self, request, *args, **kwargs):
        try:
            employee_number: int = kwargs['numero_empleado']
            controller = UserController()
            data = controller.get_employee_data(employee_number)
            return ApiRestUtilities.get_rest_successfull_response("User retrieved succesfully: ",
                                                                  data,
                                                                  200)
        except:
            ApiRestUtilities.get_rest__validation_error_response("Invalid employee number: ",
                                                                 "employee_number",
                                                                 400)
