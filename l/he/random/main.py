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
print("Password: ",password)

english = "abcdefghijklmnopqrstuvwxyz"
preview_eng = ''.join(secrets.choice(english) for i in range(length))
print(" Names: ",preview_eng)

numbers = string.digits
preview_num = ''.join(secrets.choice(numbers) for i in range(length))
print(" Numbers: ",preview_num," ")
