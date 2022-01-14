# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

 num1 = 7
# # Expected output: '7 is odd'
 num2 = 42
# # Expected output: '42 is even'
 num3 = 221
# # Expected output: '221 is odd'

 def is_even number
   if number % 2 == 0
     "#{number} is even"
   else
     "#{number} is odd"
   end

 end
  p is_even num1
  p is_even num2
  p is_even num3


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

 album1 = 'Rubber Soul'
# # Expected output: 'Rbbr Sl'
 album2 = 'Sgt Pepper'
# # Expected output: 'Sgt Pppr'
 album3 = 'Abbey Road'
# # Expected output: 'bby Rd'

  def  remove_vowals (string)
     string.delete 'aAeEiIoOuU'

  end
  p remove_vowals album1
  p remove_vowals album2
  p remove_vowals album3
#I got a ittle stuck because I didnt write (string) I got (ArgumentError).
#First I declare my variable and what I want back is a new string without vowels.
#I use .delete to remove my vowels.



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forwards or backwards. Use the test variables provided.

is_palindrome1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
is_palindrome2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
is_palindrome3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'


def is_pal (string)
  if string == string.reverse.capitalize
          "#{string} is a palindrome"
    else  "#{string} is not palindrome"
  end
end

p is_pal is_palindrome1
p is_pal is_palindrome2
p is_pal is_palindrome3


#I was super excited because I did this super fast until I got stuck I forgot about the firts letter is capital.
