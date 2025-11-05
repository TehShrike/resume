# <a href="https://joshduff.com" class=no-underline-ever>Josh Duff</a>

<p class="print-top-right">
	<a href="mailto:me@JoshDuff.com" class=no-underline-ever>me@JoshDuff.com</a>
</p>

I like to work on boring-sounding business software that people use to get their jobs done.

I prefer to work as a product manager+developer, interacting directly with customers and translating business requirements into deliverables.

I've worked for employers with lots of developers that shipped buggy software slowly.  I've worked on small teams that shipped great software reliably.  I prefer the latter.

I've been working remote since 2013, though I've appreciated working once a week from coffee shops with nearby coworkers at a couple of jobs.

## Previous employers

### Duff Ventures (contracting) 2025-current

*TypeScript, React, Svelte, MySQL*

- For a printed circuit board manufacturer: developed a purchasing system to order the parts needed to satisfy a bill of materials from multiple vendors, optimizing for price, lead time, attrition, etc.
- For an arborist: developed an instant estimate system for lead generation

### Workshop (internal communications) 2023-2025

*TypeScript, Vue, Postgres, Cloudflare Workers*

Developed an email editor (think the interface you use to create emails in MailChimp or similar marketing email senders) to replace a third-party whitelabeled editor.

### T.Rex Arms (ecommerce, fulfillment, manufacturing in the firearm accessories industry), 2020-2023

*TypeScript, Svelte, MySQL, Cloudflare Workers, node.js*

Worked primarily on the internal software that coordinated inventory, sales, fulfillment, customer service, manufacturing.

- Developed queue-based task workers to integrate with Quickbooks and other third-parties
- Developed a barcode-scanner interface for warehouse workers to audit inventory, move inventory.  Eyes-free, tolerant to loss of internet or server downtime, all business logic server-side.
- Developed the [storefront interface for a holster picker](https://www.trex-arms.com/store/trex-arms-sidecar-holster/), with every color+pistol+light combination driving manufacturing details in the backend
- Developed a work order system

### EquipmentShare (heavy construction equipment industry), 2019-2020

*TypeScript, lit-html*

Developed the front-end of a payroll administration webapp.  My team worked on time-tracking for truck drivers: the truckers used a mobile app to log their time for [compliance](https://www.fmcsa.dot.gov/regulations/hours-service/summary-hours-service-regulations) and payroll purposes.

I built out the front-end webapp used by company administrators.  Got used to solving [unnecessarily difficult timezone problems](https://gist.github.com/TehShrike/61ea0820354df2d4d56f5a102623e4de) with the JS Date API.  Published a pretty good [date range selector](https://github.com/EquipmentShare/date-range-input).

### Duff Ventures (consulting) 2017-2019

*TypeScript, Svelte, node.js*

I worked as a freelancer, mostly serving clients in the publishing and customer service industries.  Highlights included:

- Building a markdown→[Leanpub](https://leanpub.com/) CI publishing pipeline, including book linting
- Getting screensharing to work for nested iframes in [Median Cobrowse](https://www.hellomedian.com)

### Cake (consumer software), 2016-2017

*TypeScript, React, MySQL*

With two other developers, added features and fixed bugs to get a node.js/Express/React app (a forum-based social network, now defunct) closer to shipping.

### eDataSource (email marketing industry), 2013-2016

*Java, AngularJS, MySQL/RDS/Aurora, Hadoop/Apache Pig*

* With a team of 3-4 developers:
  * Built and maintained a distributed Java application that processes millions of emails per day, indexing the commercial email campaigns and storing the results in MySQL and ElasticSearch
  * Developed a client-facing AngularJS application [Email Analyst](http://www.edatasource.com/competitive-tracker/), used by email marketers to determine the effectiveness of their marketing campaigns and diagnose email deliverability problems
  * Maintained [Boxbe](https://www.boxbe.com/), a spam-filtering service used by 1M+ users
* Built the internal admin site used to manage the domain/brand/company taxonomy, and administrate client user accounts

### ISoft Data Systems (car parts and heavy truck parts industries), 2005-2013

*C++, MFC, MySQL, JavaScript, PHP, node.js*

In roughly chronological order:

* Maintenance and feature development for an inventory/point of sale application built with C++/MySQL
* Made a minimal CRM tool for internal support use, using PHP and MySQL
* Made a time-tracking system with a PHP/MySQL back-end
* Worked with partner customers to develop an enterprise application for the heavy truck parts industry
* Made a push-based replication tool for MySQL databases
* Became lead developer/designer of legacy Windows application
* Codified standards for internal documentation in the company wiki, curating and maintaining all input
* Made an XMPP chatbot for use in company chat rooms using C++/Gloox
* Made an application for performing queries directly against Quickbooks company files
* Made a prototype for a PhoneGap-capable mobile version of parts search portal [HeavyTruckParts.net](https://www.heavytruckparts.net) with jQuery Mobile, PHP, TinyMVC
* Made a web application for enterprise inventory software, for use on mobile hardware with barcode scanners
* Made a client framework in JavaScript capable of running in Windows CE's IE6, and Safari Mobile
* Made API frameworks for the server-side in both PHP and JavaScript (using node.js)

As the sole phone support tech during my first year at ISoft:

* Handled all incoming support calls for a Windows-based application
* Maintained and added to a suite of reports built with Crystal Reports and MySQL queries
* Travelled to customer locations to perform installations and training

<div class="no-print">
	For a long-form description of my time at ISoft, <a href="//tehshrike.github.io/resume/isoft.html">click here</a>.
</div>

***

## Open source

### Larger projects

* [spyfallx.com](https://github.com/tehshrike/spyfallx), an implementation of a popular tabletop party game
* [abstract-state-router](https://github.com/TehShrike/abstract-state-router), a framework-agnostic nested state router for web applications
* [susdsearch.com](https://github.com/TehShrike/susd-search-site), an improved search site for some of my favorite reviewers
* [canonreader.com](https://github.com/TehShrike/canon-reader), a Bible reader


<div class="no-print">

### An arbitrary selection of my smaller libraries

* [classy-graph](https://tehshrike.github.io/classy-graph/), an exercise in "data-ink maximization" inspired by Edward Tufte.
* [sql-concat](https://github.com/TehShrike/sql-concat), for building SQL statements programmatically
* [financial-number](https://github.com/TehShrike/financial-number), for arbitrary-precision arithmetic on financial values
* [regex-fun](https://github.com/TehShrike/regex-fun), for writing maintainable regular expressions

</div>

Plus [hundreds of other JS libraries on GitHub](https://github.com/search?o=desc&q=user%3ATehShrike&s=stars&type=Repositories).

## Familiar Technologies

Delivered products/features using:

* JavaScript
	* node.js
	* AngularJS
	* React
	* Redux
	* Svelte
	* Express
	* Koa
	* Vue
* Java
* PHP
* C++
* Databases
	* MySQL
	* SQLite
	* ElasticSearch
	* Redis
* CircleCI
