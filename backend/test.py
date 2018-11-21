from Crypto.Cipher import AES
obj = AES.new('This is a key12w', AES.MODE_CFB, 'This is an IV456')
message = "The answer is no"
ciphertext = obj.encrypt(message)
print (ciphertext)
obj2 = AES.new('This is a key12w', AES.MODE_CFB, 'This is an IV456')
print (obj2.decrypt(ciphertext).decode('utf-8'))