---
layout: post
title:  "Swap"
date:   2015-04-09 6:11:32
categories: documentation
---

##  Swap(Object a, Object b)

|__Author__| Martin Tuck |
|__Input__ | Object a and an Object b |
|__Result__ | Objects a and b are swapped|


{% highlight c %}

void Swap(Object a, Object b){
	Object temp = a;
	temp = a;
	a = b;
	b = temp;

}

{% endhighlight %}