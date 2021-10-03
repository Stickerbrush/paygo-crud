from django.db import models
from django.db import models
from django.contrib.auth.models import AbstractUser
from utils.oauth.oauth_manager import UserManager
import datetime

#Custom user model to fit all the extra data described in the csv file
class CustomUser(AbstractUser):

    # Configuration fields
    objects = UserManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', ]
    class Meta:
        db_table = 'CustomUsers'

    nombre = models.CharField(max_length=75, null=False)
    primer_apellido = models.CharField(max_length=50, null=False)
    segundo_apellido = models.CharField(max_length=50, null=False)
    cedula = models.CharField(max_length=20, null=False)
    fecha_de_nacimiento = models.DateField(default=datetime.date.today, null=True, blank=True)
    sexo = models.CharField(max_length=1, default="M")
    fecha_ingreso = models.DateField(default=datetime.date.today)
    numero_de_empleado = models.CharField(default=30, null=False)
    cargo = models.CharField(default=50)
    jefe = models.CharField(default=30, null=False)
    area_operacional = models.CharField(default=30, null=False)
    ciudad = models.CharField(default=30, null=False)
    departamento = models.CharField(default=30, null=False)
    ventas = models.IntegerField()
    email = models.EmailField(max_length=100, null=False, unique=True)
    foto_perfil = models.CharField(max_length=2000, null=True, blank=True)
    numero_celular = models.CharField(max_length=20)

    #Management fields
    is_active =  models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    created_at = models.DateTimeField(default=datetime.datetime.now)




