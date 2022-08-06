import string
import secrets
length = int(input())
alphabet = string.ascii_letters + string.digits
while True:
   password = ''.join(secrets.choice(alphabet) for i in range(length))
   if (any(c.islower() for c in password)
         and any(c.isupper() for c in password)
         and sum(c.isdigit() for c in password) >= 3):
      break
print("סיסמה: ",password)

hebrew = "אבגדהוזחטיכלמנסעפצקרשת"
preview_heb = ''.join(secrets.choice(hebrew) for i in range(length))
print(" שמות: ",preview_heb)

numbers = string.digits
preview_num = ''.join(secrets.choice(numbers) for i in range(length))
print(" מספרים: ",preview_num," ")
