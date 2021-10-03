import pandas as pd
from django.db import connection
from django.core.management.base import BaseCommand
import logging, os, random

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
    #Trabajador.objects.all().delete()


def create_users():
    print("test")
''' 
def create_trabajadores():
    """Creates an address object combining different elements from the list"""
    logging.info("Creating address")
    df = pd.read_excel(os.path.normpath("cpmAPI/management/seed_data/trabajadores.xlsx"))
    df['numero_cedula'] = df['numero_cedula'].astype(str)
    df['contrasena'] = df['contrasena'].astype(str)
    cargos = ["OBRERO", "ADMINISTRADOR", "JEFE_ALMACEN"]
    query = """INSERT INTO Trabajadores (numero_cedula, 
                                         nombre,
                                         apellido,
                                         direccion,
                                         numero_celular,
                                         contrasena,
                                         cargo,
                                         is_active) VALUES (%s, %s, %s, %s, %s, %s, %s, True)"""

    #df.to_sql("Trabajadores", con=sql.connect("db.sqlite3"))
    with connection.cursor() as cursor:
        for i in range(len(df.index)):
            print([df.numero_cedula[i],
                                df.nombre[i],
                                df.apellido[i],
                                df.direccion[i],
                                df.numero_celular[i],
                                df.contrasena[i],
                                random.choice(cargos)])

            cursor.execute(query, (df.numero_cedula[i],
                                   df.nombre[i],
                                   df.apellido[i],
                                   df.direccion[i],
                                   str(df.numero_celular[i]),
                                   df.contrasena[i],
                                   random.choice(cargos)))

        cursor.close()
    #logging.info("{} address created.".format(address))
    #return address

def create_clientes():
    """Creates an address object combining different elements from the list"""
    logging.info("Creating address")
    df = pd.read_excel(os.path.normpath("cpmAPI/management/seed_data/clientes.xlsx"))
    df['numero_nit'] = df['numero_nit'].astype(str)

    print(df.info())
    cargos = ["SUPERVISOR"]
    query = """INSERT INTO Clientes (numero_nit, 
                                         nombre,
                                         apellido,
                                         correo,
                                         direccion,
                                         contrasena,
                                         cargo,
                                         is_active) VALUES (%s, %s, %s, %s, %s, %s, %s, True)"""

    #df.to_sql("Trabajadores", con=sql.connect("db.sqlite3"))
    with connection.cursor() as cursor:
        for i in range(len(df.index)):
            print([df.numero_nit[i],
                                df.nombre[i],
                                df.apellido[i],
                                df.correo[i],
                                df.direccion[i],
                                df.contrasena[i],
                                random.choice(cargos)])

            cursor.execute(query, (df.numero_nit[i],
                                   df.nombre[i],
                                   df.apellido[i],
                                   df.correo[i],
                                   df.direccion[i],
                                   df.contrasena[i],
                                   random.choice(cargos)))

        cursor.close()
'''
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
