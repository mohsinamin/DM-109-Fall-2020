## DM 109 Fall 2020: Course Repository ##
## ASSIGNMENT # 01: Floyd-Warshall Algorithm (TRANSITIVE CLOSURE) ##

## Description ##
This repository contains assignment to implement floyd warshall algorithm in (javascript).

## Algorithm: ##
//Input: Adjacency Matrix
//Output: Transitive Closure

    R(0) <- A
    for k <- 1 to n do

      for i <- 1 to n do

        for j <- 1 to n do
  
            R(k)[i,j] <- R(k-1)[i,j] or R(k-1)[i,k] and R(k)[k,j]

      Return R(n)
 
## Time Complexity ##

O(n^3)
Thus the time complexity is n^3 because there are 3 loops and each loop is running n times So,
          n*n*n is n^3 

## User Input : Comma Separated ##
Userinput is taken in single dimensional array whereas if comma found donot store in 2d array then a single dimensional array is converted into 2D array which is the requirement to implement floyd Warshall.

The name "Transitive Closure"  means 
      the transitive property if a is related to b and b is related to c then a is related to c.
      
Since Relations are mapped on 2D matrix which is the better approach ans instead of using airthematic operations, we are using logical operators.
For ("+") -> ("&&") is used.
For minimum -> ("||") is used.
Though it is based on logic both approaches are far better to implement floyd warshall algorithm.


