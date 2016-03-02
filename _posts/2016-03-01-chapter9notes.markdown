---
layout: post
title:  "Chapter 9 notes"
date:   2016-03-01 21:29:13 +0000
categories: jekyll update
---


# chapter 9 notes

## planning and estimating

Planning and Estimating 
* before sarting to build software it is essention to plan the entire development effort in detail

* Planning continues druing development and the post delivery maintenance
    * Intial planning is not enough
    * planning must proceed throughout the projeCT
    * THE EARLIEST POSSIBLE TIME THAT DETAILED PLANNING CAN TAKE PLACE IS AFTER The SPEFICFICATIONS ARE COMPLete

__Cost estimation__
* occur at
    * concept phase
    * requirements analysis
    * design phase
    * implementation phast
    * implementation and testing
__Cost Types__
    * internal cost- cost to the developer
        * Hardware support
        * software support
        * overhead (rent, utilities)
    * extenal cost- cost to the client
__Duration Estimation__
    * Setting a delivery date
    * Overestimating
        * avoiding overstimating 
    * underestimating
        * loses credibility when deliverign latE
        * Avoiding penalties in the contract when delivering late
__factors which help estimating__
* Difficulty of project
* Human factors
    * developer expirience 
    * Developer compatibility
    * Whether critical stff will remain through the entire project
* size of the project

__Mtrics for Size--
* LOC lines of code
* kdsi throusand devlivered source instructions (total nubmer of executed instructions)
* Numer of operands and oprators
* FFP files flows and processes
* Function poins- FP

__loc and kdsi problems__
* creation of source code is only small part of total effort
* conparing apples to oranges when comparing languages
* Some languages do not have lines LSP
* question as to whether only to count executable statements (omit declaration, commect JCL, reused cod)
* Not all code that is written is delivered
* Most wait until the project is finished to get the measurement
        
__USE of FFP__
* file- collection of logiclaly or physicall related records permanently resident in the product
* flow -- data interface between the product and the environments
* Process -- functionally defined logical or arithmentic manipulation of the data (sorting validationg updating, etc)

* size = files + flows + processes
* cost = d *S   where d is a constant which varies from organization to organization ( a measure of the efficiency or productivity of the development process)
    * Note the size can be determined once the design is completed, not waiting until the__Function points - used to assess the size of a project
* identify the functions the applications must hav
* for each function compute
    *    external inputs
    * external outpputs
    * external inquireis
    * interal logical files
    * external logical files
__Function points continued__
1. identify the functions the application must have
2. ??
3. multiply the numbers from step 2 by specific values(seee page 274) this results in an adjusted function point value UFP
4. compute the technical complexity factor TCF using the effect of the 14 gerneral characteristics of the project which have been assigned a value from 0 not present or no influes to 5" strong influence throught". The 14 numbers are summed using the total degree of influence "DI" Then the TCF is given by .65 + .01 *DI
5. FP = UFP * TCF
once the function point value is computed an estimate for the lines of code by multiplying a constant associated with the lagnuage we plan to use for the application

__Techiniques for estimation of size__
* use comparisons with past jobs
* use function point method 
    * compute un-adjusted function points
    * apply adjustment process
* USE loc estimates to compute labor and ruation using cocomo formula 

COCOMO
* estimation method by behm(1981)
* constructive cost model
depends on the loc of a project

Cost estimation techniques
1. expect judment by analogy- consult a number of experts that have done similar project.
2. Bottom up-- estimate each component from the leaf level and add going upward to the design
3 algorithmic cost estimation -- ues FFP or FP and compute

__Software project management Plan (spmp)__
* Plan whcih describe the proposed software development in full detail(see page 285)
* Consist of three main components
    * the work to be completed
    * what resource are needed to do the work
    * The money to pay for it all
1. project function - work whcih continues throughout the project and is not related to any specific workflow
2. activity - work which is related to a specific phase or workflow and has a definite beginning  and ending date.

__Resources:__
1. people (varies during the duration of the project)
2. hardware
3. Support software (include CASE tools)





    



    