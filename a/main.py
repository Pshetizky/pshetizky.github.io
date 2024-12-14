from pyscript import display
import string, secrets
#length = int(input())
length = int(12)
alphabet = string.ascii_letters + string.digits + "~@#$%^&*_+-=:?!"
while True:
   random1 = str().join(secrets.choice(alphabet) for i in range(length))
   if (any(c.islower() for c in random1)
         and any(c.isupper() for c in random1)
         and sum(c.isdigit() for c in random1) >= 1):
      break
display(str(random1))
random1 = str()
numbers = string.digits
display(str().join(secrets.choice(numbers) for i in range(length)))
english = "abcdefghijklmnopqrstuvwxyz"
display(str().join(secrets.choice(english) for i in range(length)))
russian = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
display(str().join(secrets.choice(russian) for i in range(length)))
arabic = "ابتثجحخدذرزسشصضطظعغفقكلمنهوي"
display(str().join(secrets.choice(arabic) for i in range(length)))
hebrew = "אבגדהוזחטיכלמנסעפצקרשת"
display(str().join(secrets.choice(hebrew) for i in range(length)))
#for i in range(50):
#    random2 = str().join(secrets.choice(numbers))
#    if random2 not in random1:
#        random1.append(random2)
#print(str().join(random1))
