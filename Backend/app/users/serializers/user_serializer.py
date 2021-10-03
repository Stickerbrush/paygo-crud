from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from users.models.users import CustomUser

class CustomUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = CustomUser
        fields = [
            'nombre',
            'primer_apellido',
            'segundo_apellido',
            'cedula',
            'fecha_de_nacimiento',
            'sexo',
            'fecha_ingreso',
            'numero_de_empleado',
            'cargo',
            'jefe',
            'area_operacional',
            'ciudad',
            'departamento',
            'ventas',
            'email',
            'foto_perfil',
            'numero_celular',
        ]

    #CRUD Interface:

    #create: create and save a new user instance
    def create(self, validated_data):
        user_password = validated_data['password']
        user = CustomUser.objects.create(password= make_password(user_password), **validated_data)
        user.username = validated_data['email']
        user.save()
        return user

    #update: update an user instance
    def update(self, instance, validated_data):
        if 'password' in validated_data:
            validated_data['password'] = make_password(validated_data['password'])
        user = super().update(instance, validated_data)
        return user

    #delete: delete an user instance
    def delete(self, instance):
        user = CustomUser.objects.get(instance)
        user.delete()


