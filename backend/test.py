from Crypto.Cipher import AES
obj = AES.new('This is a key12w', AES.MODE_CFB, '1234561234561234')
message = ""
ciphertext = obj.encrypt(message)
print (ciphertext)
obj2 = AES.new('This is a key12w', AES.MODE_CFB, '1234561234561234')
print (obj2.decrypt(ciphertext).decode('utf-8'))