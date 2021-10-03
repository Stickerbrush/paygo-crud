import pandas as pd
from django.db import connection
from django.core.management.base import BaseCommand
import logging, os, datetime
from users.models import CustomUser
from users.serializers.user_serializer import make_password

# python manage.py seed --mode=refresh

""" Clear all data and creates addresses """
MODE_REFRESH = 'refresh'

""" Clear all data and do not create any object """
MODE_CLEAR = 'clear'

class Command(BaseCommand):
    help = "seed users for testing and development."

    def add_arguments(self, parser):
        parser.add_argument('--mode', type=str, help="Mode")

    def handle(self, *args, **options):
        self.stdout.write('seeding data...')
        run_seed(self, options['mode'])
        self.stdout.write('done.')


def clear_data():
    """Deletes all the table data"""
    logging.info("Delete Address instances")
    CustomUser.objects.all().delete()


def create_users():
    logging.info("Creating users")
    print("Creating users")

    df = pd.read_csv(os.path.normpath("users/management/seed_data/BDprueba.csv"))

    #Data pre-processing
    df['Número de empleado'] = df['Número de empleado'].astype(str)
    df['Jefe'] = df['Jefe'].astype(str)
    df['Fecha de Nacimiento'] = df['Fecha de Nacimiento'].apply(lambda x:
                                                                datetime.datetime.strptime(x, "%d/%m/%Y").
                                                                strftime("%Y-%m-%d"))
    df['Fecha de Ingreso'] = df['Fecha de Ingreso'].apply(lambda x:
                                                          datetime.datetime.strptime(x, "%d/%m/%Y").
                                                          strftime("%Y-%m-%d"))

    df['Ventas 2019'] = df['Ventas 2019'].str.replace("$","", regex=False)\
                                            .str.replace(".", "", regex=False)
    df['Ventas 2019'] = df['Ventas 2019'].fillna(0)
    df['Ventas 2019'] = df['Ventas 2019'].astype(int)

    #Data Loading
    for i in range(len(df.index)):

        new_user = CustomUser.objects.create(
            nombre=df['Nombres'][i],
            primer_apellido=df['Apellido 1'][i],
            segundo_apellido=df['Apellido 2'][i],
            cedula=df['Cédula'][i],
            fecha_de_nacimiento=df['Fecha de Nacimiento'][i],
            sexo=df['Género'][i],
            fecha_ingreso=df['Fecha de Ingreso'][i],
            numero_de_empleado=df['Número de empleado'][i],
            cargo=df['Cargo'][i],
            jefe=df['Jefe'][i],
            area_operacional=df['Zona'][i],
            ciudad=df['Municipio'][i],
            departamento=df['Departamento'][i],
            ventas=df['Ventas 2019'][i],
            email=df['Email'][i],
            foto_perfil=df['Imágen'][i],
            numero_celular=df['Celular'][i],
            password=make_password(df['Contraseña'][i])
        )

        new_user.username = df['Email'][i]
        new_user.save()
        print("User: " + df['Email'][i] + " created succesfully!")

def run_seed(self, mode):
    """ Seed database based on mode

    :param mode: refresh / clear
    :return:
    """
    # Clear data from tables
    clear_data()
    if mode == MODE_CLEAR:
        return

    # Creating 15 addresses
