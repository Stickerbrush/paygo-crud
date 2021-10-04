from django.apps import AppConfig


class UsersConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'users'

    def ready(self):
        from .management.commands.seed import create_users, clear_data
        from users.models.users import CustomUser
        if len(CustomUser.objects.all()) == 0:
            print("No user data detected, seeding into the database...")
            create_users()
