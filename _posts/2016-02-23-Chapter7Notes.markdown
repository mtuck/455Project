---
layout: post
title:  "Chapter 7 Nots"
date:   2016-02-23 21:29:12 +0000
categories: documentation
---
#chapter 7


### Modules
* __Modules__ lexically contiguous sequence of statements bounded by boundary symbols, having an associated name


### Cohestion and coupling
* measures of software quality relating to modules or classes.
* Measures used to quantify characteristics like reusablility, reliability etc.


#### Cohesion
* __Cohesion__ The degree of interation within a module
  * A description of the logical relationship between elements of a class
  * The type of relationship that exists among the elements of each software entity.
* __Types of Cohesion__ 
  1.  __Coincidental__: No meaningful relationships among the elements of an entity. Difficult to describe the module's functions(s)
  2. __Logical__: performs a series of related actions, one of which is selected by the calling module
  3. __Classical or Temporal__ Performs a series of actions related in time
  4. __Procedural__: performs a series of actions related by the sequence of steps to be followed by the product
  5. __communicational__: performs a series of actions related by the sequence of steps to be followed by the product performed on the same data
    * Note 3,4,5 are sometimes called flowchart cohesion
  6. __informational__: Performs multiple functions each with its own entry point with independent code for each action, all performed on the same data structure
  7. __Functional__: performs a single function or action
