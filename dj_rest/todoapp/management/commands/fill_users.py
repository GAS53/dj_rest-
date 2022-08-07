from django.core.management import BaseCommand, call_command
from russian_names import RussianNames
from todoapp.models import UserModel

class Command(BaseCommand):

    def add_arguments(self, parser):
        parser.add_argument('action', type=str)
        return super().add_arguments(parser)

    def handle(self, *args, **options):
        res = int(options['action'])
        print(f'старт заполнения пользователями')
        users = []
        all_names = RussianNames(count=res, output_type='dict', transliterate=True)
        for i in all_names.get_batch():
            # print(f"{i['name'].lower()}")
            user=f"{i['name'].lower()}_{i['surname'].lower()}"
            # print(user)
            users.append(
            UserModel(
                username=user,
                first_name = i['name'],
                last_name =i['surname'],
                email = f"{user}@mail.ru"

            ))
        
        UserModel.objects.bulk_create(users)
        print(f'стоп заполнения пользователями')
        suser = 'test'
        call_command('createsuperuser', '--username', f'{suser}', '--email', 'test@test.ru')
        print(f'создан супуер пользователь {suser}')