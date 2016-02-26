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


##### Impediments  to reus
* ego
* unedrstanding of quality
* economic
* retrieval
* expense
* legality
* for COTS components- limited extensibillity/modifiability
* Not invented here syndrome

##### Design Reuse

* Reuse may occur durning design as well as implementation
* Opportunistic reuse of designs is common when an organization develops software in only one application domain


##### Types of design reuse
* comppany that develops software in one specific domain may set up repository of design components 
    * increase design quality
    * reduce design time
    * use tested modules
* Application Frameworks
* Design patterns  



##### Design patters
* Chirstopher alexander quote here " each patter describes a problem which occurs over"
* Each design patter is a a solution to a general problem in the form of a set of in classes (missing end)
##### elements of design patterns
1. pattern Name
2. problem it solves
3. solution- elements making up the design
4. Consequences - results and trade offs of applying

#### Design pattern list
* Look up list of design patters
* section 8.5 

* The 23 "GANG OF FOUR" DESIGN PATTERS ARE GROUPED INTO CATEGORIS
*Creational
    * factory
    * builder
    * prototype
    * factory builder
    * singleton
* CREATIONAL DESIGN PATTERS SOLVE DESIGN PROBLEMS BY CREATING OBJECTS

#### structural
* structural design patters solve design problems by identifying a single way to realize relationships between entities


##### behavior patters
* behavioral design patters solve design problems by identifying common communication patters


##### Adapter design patters
* solve the implementation icompatibilies
* provides a genral solution to teh problem of permitting communication betweeen two objects with incompatible interfaces
* provide a way for an object to permit access to its internal implementation without ccuping clients to the structure of that internal implementation
* That is adapter provides all the advantages of information hiding without having to actually hide the implementation details



##### bridege design patters
* 8 aim of the bridge design patter
* sometimes called a driver
* the design that consists of two pieces
    *The hardware dependent
    * hardwaqre indepent
* the abstract operation are decoupled from the hardware dependent parts
* if the hardware changs
    * the modifications to the design and the code 
* The bridge design patter is a way of achieving information hiding via encapsulation


##### iterator design pattern
* an aggregate object is an object that contains other objects grouped together as a unit
    *examples linked list
    
* An iterator is a programming construct that allows a programmer to traverse the elements of an aggregate object without exposing the implementation of that aggregate
* an iterator may be viewed as a pointer with two main operations
    * get hands on element
    * go to next element
* diagram 245
* implementation details of the elements are hidded from the iterator
* we can use an iterator to process every element of collection
* independently of the implementation of the container of theh elements.
* iterator will usually allow different traversal methods
* it even allows multiple traversals to be in progress concurrently.


##### Strengths of design patters
* design patters promote reuse by solving general design problems
* high level design view. 
* implementation of many design patters already exist
* a maitince programmers who is familiar with design patters can 

##### weaknesses of design patters
* the use of 23 standard design patters may mean the language is not powerfull enough
* There is a easy way to see when on to use design patterns
* multiple design patterns interating can be difficult
* it is hard to retrofit design pattern

##### Portability
* software whcih is significantly easier to modify to run on another platform than it is to recode from scratch

##### impediments to portability
* hardware incompatibilities
* Operating system incompatibilities
* differnce in numeric capatibilities
* comiler incompatibilities
* Data formats


##### Hardware incompatibilites
* storage media
    * ZIP VS dat
* character code(ASCII EBSIDIC)
* word size

##### Os icompatibil.
* Job control languages can be vastly different
    * syntactic differnce
* virtual memory vs overlays

#### Numeric incompat.
* difference in word size can effect accuracy
* No problems with 
    * JAVA
    * ADA
    
###### compiler incompati
* Standards is not enforced (FORTRAN)
* cobol standards permit subsets or supersets
* ANSIC standard (1989)
    *  lint processor aids portability
* Ada standard - the only succesful language standard
    * first enforce legally
* JAVA is still evolving

##### why portability
* Good software last 15+ years and Hardware changes every 4 years
* Upwardly compatibile hardware works 
* Portability can lead  to increased profits (1 code)


##### achieving port
* use constructs and standards
* how portablle can an operating system be written

#### portable application software
* Use popular language
* popular os
* strict language standards
* avoid numerical incompatibilites
* document meticulously
* __See pg. 259__