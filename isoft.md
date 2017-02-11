ISoft Data Systems
=====

Support, 2005-2006
-----
I was hired part-time as the sole support person for a local software company. At the time, there were about 3 full-time employees and 5 other part-time employees.

I supported our single software product at the time: inventory and point of sale software made for car and heavy-truck parts yards.

My job was to talk to every person who called in with a problem, and fix it for them!  Customers would call in to complain about issues they had.  I helped people with bugs in our software, mass changes to data in their database, importing new data from other sources, finicky printers, changes to reports that they needed, training in various aspects of using the software, and everything else that came up.

As I became more comfortable with the software, I started to take more ownership of it.  I developed ideas about how various parts of the software should behave, and how printed reports should designed.  My introduction to databases came about while familiarizing myself with the underlying schema of our application.

Other developers were always busy working on the never-ending list of new features that had been promised to customers, so I bugged them until they helped me set up a development environment on my computer so that I could start fixing smaller bugs that I would find out about.

After about a semester of such part-time work, summer break let me work full time.  Since another support fellow had joined on that year, my summer project was to rewrite the screen used to export data to Quickbooks, fixing bugs and making it crash less.  From about that point on, I was a sort of "second-tier" support, and spent most of my time writing code and learning from the other developers.

Developer, 2006-2013
-----
Between contributions to our inventory/point-of-sale Windows app ITrack Pro, I travelled to new customer locations to do installations and training, and started getting involved in some web development.  I made acquaintences with PHP, and wrote a time-tracking app, and a simple CRM which were used internally.

We developed a need to replicate data from our customer's on-site MySQL servers to our public server, so I wrote a push-based replication tool to read MySQL's binary log files.  Not long afterwards, I joined the other two developers in spending more time with our enterprise application (and the customers we were writing it for) as it barrelled towards completion in 2008.

After our big new product was out the door, I transitioned mostly back to our bread-and-butter application still in use by hundreds of customers, taking over primary development responsibilities.  I fixed many bugs and added many features.

Developing that product was my life for several years—in that period I also became the unofficial curator of our documentation wiki, with [over a thousand edits](http://wikido.isoftdata.com/index.php?title=Special:Contributions&limit=200&target=Duff), including codifying some of our internal practices and writing guidelines to aid newer developers in avoiding common issues.

I wrote other small tools as the need became apparent, including an XMPP chatbot using [gloox](http://www.camaya.net/gloox/) for our internal chat rooms, and an application that would let our support team run queries against Quickbooks' data files.

Towards the end of 2011, after indoctrinating some new programmers into the ways of my beloved ITrack Pro, I shifted towards web development, creating a prototype for a PhoneGap-capable mobile version of our [HeavyTruckParts.net](http://www.heavytruckparts.net/) website using jQuery Mobile and PHP/TinyMVC on the server-side.  This was my first real introduction to the concept of the model-view-controller structure.

In early 2012, I began work on a new product—a webapp meant to run on mobile devices with barcode scanners, to give customers using our enterprise product the ability to easily do jobs such as count and move their inventory between locations around their warehouses.  As one of our target devices was a barcode scanner running a Windows CE equivalent of IE6, my options for client-side frameworks were fairly limited, and I ended up evolving my own [simple framework](http://wikido.isoftdata.com/index.php/Web_development/CatHerder) for juggling screens and modules.  That framework was eventually generalized and has since been used in other applications.

As I started to see that project in front of me, I started digging more deeply into JavaScript.  I had used it in the past, but mostly to add flavor to some side web projects of mine, and hadn't bothered to actually learn about it.  I knew I wanted to become more familiar with it before embarking on the barcode scanner project, a process that resulted in me falling in love with JavaScript and node.js.  I have since used node.js to write several tools, including the back-end for another barcode-scanning application, and a client for our automatic update server.
