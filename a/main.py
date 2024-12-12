import string, secrets
from pyscript import display
##length = int(input())
length = int(20)
alphabet = string.ascii_letters + string.digits + "~!@#$%^&*_+-=.,:"
while True:
   password = ''.join(secrets.choice(alphabet) for i in range(length))
   if (any(c.islower() for c in password)
         and any(c.isupper() for c in password)
         and sum(c.isdigit() for c in password) >= 3):
      break
display(password)
numbers = string.digits
preview_num = ''.join(secrets.choice(numbers) for i in range(length))
display(preview_num)
english = string.ascii_letters
preview_eng = ''.join(secrets.choice(english) for i in range(length))
display(preview_eng)
russian = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
preview_rus = ''.join(secrets.choice(russian) for i in range(length))
display(preview_rus)
arabic = "ابتثجحخدذرزسشصضطظعغفقكلمنهوي"
preview_arb = ''.join(secrets.choice(arabic) for i in range(length))
display(preview_arb)
hebrew = "אבגדהוזחטיכלמנסעפצקרשת"
preview_heb = ''.join(secrets.choice(hebrew) for i in range(length))
display(preview_heb)
