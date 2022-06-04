# test inputs


print('----------------------')
user_input = input("Enter an ingredient: ")
print('----------------------')

with open('recipe.txt', 'w') as file:
    file.write(str(user_input))