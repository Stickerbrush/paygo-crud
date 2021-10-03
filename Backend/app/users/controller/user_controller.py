from users.serializers.user_serializer import (CustomUser,
                                               CustomUserSerializer,
                                               make_password)



class UserController(object):

    def __init__(self) -> None:
        super().__init__()

    def get_employee_data(self, employee_number) -> dict:
        user = CustomUser.objects.get(numero_de_empleado__iexact=employee_number)
        if user is not None:
            subemployees = CustomUser.objects.filter(jefe__iexact=employee_number)
            serialized_subemployees = []
            sales_sum = 0

            for subemployee in subemployees:
                if user.cargo != "Ejecutivo Comercial":
                    sales_sum += subemployee.ventas
                serialized_subemployees.append(CustomUserSerializer(subemployee).data)

            return {
                'user': CustomUserSerializer(user).data,
                'sales_sum': sales_sum,
                'subemployees': serialized_subemployees
            }
        else:
            return {}






#ValidationError
