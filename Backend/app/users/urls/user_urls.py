from django.urls import path
from users.views.user_views import *

urlpatterns = [
    # CRUD => Create, Read, Update, Delete
    path('create', UserCreate.as_view()),
    path('list', UserList.as_view()),
    path('a', UserLoadJsonUserBulk.as_view()),
    path('get/<int:pk>', UserDetail.as_view()),
    path('update/<int:pk>', UserUpdate.as_view()),
    path('delete/<int:pk>', UserDelete.as_view())
]
