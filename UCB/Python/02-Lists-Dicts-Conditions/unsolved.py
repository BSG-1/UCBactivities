#!/usr/bin/python3

###############################################################################
#
# BRIEF //
#   The student script from last time was a good first-pass. Now, it's time to
#   make it a bit more robust.
#
#   To start, refactor such that all of your prompts occur within an infinite
#   loop, which doesn't break until the user indicates the information they
#   entered is correct. Only print the information after their confirmation.
#
#   Next, refactor your program such that, after users confirm that they've
#   entered the correct information, your program prompts them as to whether 
#   they'd like to enter information for additional students.
#   
#     1. As an "easy" challenge, simply allow them to enter the values again,
#        and print the information after they confirm it's correct.
#
#     2. Your recommended challenge is to store student information in a dict.
#        When the user confirms their information is correct, add the student
#        to a list of students.
#
#        When the user says "no" to adding more students, print every student
#        in the list.
#
#        Oh, one hint--you'll want to initialize your students list outside
#        of your loop.
#
#     3. For additional fun. figure out how to let the user type in either Y
#        or y (lowercase) for "yes". Hint: Call the lower() method on a string.
#        What does it do?
#
###############################################################################

# To start, wrap your code in an infinite loop. What does this look like?
#
###############################################################################

# Next, create a dict, whose keys are the same as the variable names you've
# been using. Set their value equal to "None", which is Python's version of 
# JavaScript's null. Refactor your calls to input such that they assign to
# the dictionary's values directly, rather than to variable names. It'll
# look very similar!
# 
###############################################################################


student_list = []
while True:
    student_info = dict.fromkeys(['first_name','last_name','middle_initial','address','email','phone_number'])


    # Prompt user for student's identification information...
    student['first_name'] = input('Please enter the student\'s first name. ')
    student['last_name'] = input('Please enter the student\'s last name. ')
    student['middle_initial'] = input('Please enter the student\'s middle initial. ')

    # Prompt user for student's contact information...
    student['address'] = input('Please enter the student\'s address. ')
    student['email'] = input('Please enter the student\'s email. ')
    student['phone_number'] = input('Please enter the student\'s phone_number. ')

    # Print a separator...
    print('-' * 18)

    # Print all to the console...
    print('The student\'s first name is {0}'.format(first_name))
    print('The student\'s last name is {0}'.format(last_name))
    print('The student\'s middle initial is {0}'.format(middle_initial))

    print('The student\'s address is {0}'.format(address))
    print('The student\'s email is {0}'.format(email))
    print('The student\'s phone number is {0}'.format(phone_number))

    # Print a separator...
    print('-' * 18)

    for key, value in student:
        print('The student\'s {0} is {1}'.format(key, value))

    # Use a conditional statement here. If they say "No", simply continue the loop, 
    # so they can enter the information again.

    #
    # If they say "Yes", add the student to a list, and prompt them again, asking
    # if they want to add another student.
    #
    # If they say "Yes" again, continue the loop. If not, print every student in 
    # your list.
    #
    # Take this one step by step, and don't get overwhelmed. It's okay if this
    # is challenging! 
    #
    ###############################################################################

    confirmation = input('Is this information correct? (Y/n) ')

    if confirmation.lower() == 'Y':
        student_list.append(student)
        print(student_list)
        if input('Would you like to enter another student\'s information? (Y/n)')
            continue
        else:
            print('You\'ve entered the following student\'s profiles:')
            print('-'*20)

            for students in student_list:
                for key, value in student.items():
                    print('The student\'s {0} is {1}'.format(key, value))

            print('-'*18)

            break