from django.urls import path
from users.views.user_views import *

urlpatterns = [
    # CRUD => Create, Read, Update, Delete
    path('get/<numero_empleado>', UserDetailByEmployeeId.as_view()),
]
