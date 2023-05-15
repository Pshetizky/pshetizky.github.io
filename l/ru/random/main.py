import string
import secrets
length = int(input())
if length <= 4: length = 5
alphabet = string.ascii_letters + string.digits
while True:
   password = ''.join(secrets.choice(alphabet) for i in range(length))
   if (any(c.islower() for c in password)
         and any(c.isupper() for c in password)
         and sum(c.isdigit() for c in password) >= 3):
      break
print("Пароль: ",password)

english = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
preview_eng = ''.join(secrets.choice(english) for i in range(length))
print("Имена: ",preview_eng)

numbers = string.digits
preview_num = ''.join(secrets.choice(numbers) for i in range(length))
print("Числа: ",preview_num," ")
