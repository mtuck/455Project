---
layout: post
title:  "Chapter 7 Nots"
date:   2016-02-23 21:29:12 +0000
categories: documentation
---
# Chapter 7


### Modules
* __Modules__ lexically contiguous sequence of statements bounded by boundary symbols, having an associated name


### Cohestion and coupling
* Measures of software quality relating to modules or classes.
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
* As the cohesion number increased, so did the cohesion level and the desirability
* Functional cohesion enhances reusability
* Maintenance is easier performed on a module with functional cohesion

#### Coupling
* The degree of interation between two modules
* The type of relationship that exists between two software entities.
1. __Content__: One software entity references the contents of another entity
2. __Common__: Software entities reference a shared global data structure
3. __External__: Software entities reference the same externally declared symbol
4. __Control__: one entity passes  control elements as arguments to another entity.
5. __Stamp__: A data structure is passed but not entirely used. 
6. __Data__: One  entity calls another and are not coupled as described above (every parameter pass is simple or a data structure entirely used)


#### Abstraction:
1. Data abstraction
2. Procedural Abstraction
 
A means of achieving stepwise refinement by suppressing unnecessary details and accentuating relevant details 

#### Data encapsulation
* data strucuture along with the actions or operations to be performed on that structure.
* An example of Abstractio

#### Procedural Abstraction
* Conceptualizing in terms of giing a name to a set of high-level actions which are specified by the body of the procedure

#### Information Hiding
* Better named "Detail Hiding"
* Concept introduced by Pamas
* Hiding the implementation details of a module from another using it

#### Abstract Data Type ADT
* Specification of a data type along with the operation on that type
* Supports both data and procedural abstraction
 
#### Three important concepts in OO paradigm
1. Inheritance
2. Polymorphism
3. Dynamic Binding 
 
#### Reuse
* Taking components of one product to be used in a different product with different funcitonality 

##### __Types Of reuse__
1. __Accidental or opportunistic reuse__- developers realize that a component from a previously constructed product can be reused in the new project they are currently working on.
2. __Deliberate or systematic reuse__- components are constructed with purpose that they will be reused

##### __Advantage of Deliberate reuse
* components constructed with reuse in mind will be:
    * More likely to be easier and safer to reuse.
    * will be better documented
    * will be more throughly tested
    * will adhere to a uniformity of style
    * will be more easily maintained


##### __Disadvantages of reuse__
* can be expensive to the development company
* can be more time consuming
    * Design 
    * Testing
    * Documentation
* May not be reused after time spent making it mor reusablee
