//<><>
/* Question 7. Consider a string consisting of the characters < and > only. We consider the string to be
balanced if each < always appears before (i.e., to the left of) a corresponding > character
(they do not need to be adjacent). Moreover, each < and > act as a unique pair of symbols
and neither symbol can be considered as part of any other pair of symbols.

To balance a string, we can replace any > character with <> . Given an expression and a
maximum number of replacements, can you turn an unbalanced string into a balanced one?

For example, the strings <<>> , <> , and <><> are all balanced, but the strings >> ,
<<> , and ><>< are unbalanced . The string >> can be balanced in two moves by
replacing each > with a <> to make <><> .

Function Description
Complete the function balancedOrNot in the editor below. The function must return an array
of integers where element[i] contains a 1 if expressions[i] is balanced or a 0 if it is not.

balancedOrNot has the following parameter(s):
expressions[expressions[0],...expressions[n-1]]: an array of strings to check
maxReplacements[maxReplacements[0],...maxReplacements[n-1]]: an array of
integers representing the maximum number of replacements available for each
expressions[i]
Constraints
1 ≤ n ≤ 10
1 ≤ length of expressions[i] <= 105
0 ≤ maxReplacements[i] <= 105*/

const string = '<><>'

