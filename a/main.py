import string
import secrets
length = int(input())
if length <= 4: length = 5
alphabet = string.ascii_letters + string.digits + "~!@#$%^&*_+-=.,:"
while True:
   password = ''.join(secrets.choice(alphabet) for i in range(length))
   if (any(c.islower() for c in password)
         and any(c.isupper() for c in password)
         and sum(c.isdigit() for c in password) >= 3):
      break
print("PASSWORD: ",password)
english = string.ascii_letters
preview_eng = ''.join(secrets.choice(english) for i in range(length))
print("ENGLISH NAME: ",preview_eng)
russian = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
preview_rus = ''.join(secrets.choice(russian) for i in range(length))
print("RUSSIAN NAME: ",preview_rus)
arabic = "ابتثجحخدذرزسشصضطظعغفقكلمنهوي"
preview_arb = ''.join(secrets.choice(arabic) for i in range(length))
print("ARABIC NAME: ",preview_arb)
hebrew = "אבגדהוזחטיכלמנסעפצקרשת"
preview_heb = ''.join(secrets.choice(hebrew) for i in range(length))
print("HEBREW NAME: ",preview_heb)
numbers = string.digits
preview_num = ''.join(secrets.choice(numbers) for i in range(length))
print("NUMBERS: ",preview_num," ")