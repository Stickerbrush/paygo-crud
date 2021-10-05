from django.urls import path
from users.views.user_views import *

urlpatterns = [
    # Just the endpoint to fetch the data described in the problem
    path('get/<numero_empleado>', UserDetailByEmployeeId.as_view()),
]
