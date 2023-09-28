# A example of how to use HTMX with Node and Express to use 4 simultaneous APIs in real time

It shows how to create a web application that allows users to view quotes from the Lord of the Rings movie, prompts to create images and more.

## What is HTMX?

htmx is the HTML extension syntax that replaces JavaScript with simple markup. It could change the course of web development.

htmx gives you access to AJAX, CSS Transitions, WebSockets and Server Sent Events directly in HTML, using attributes, so you can build modern user interfaces with the simplicity and power of hypertext

htmx is small (~14k min.gz’d), dependency-free, extendable, IE11 compatible & has reduced code base sizes by 67% when compared with react

## Recommendations
The [book](ttps://www.amazon.com/Hypermedia-Systems-Carson-Gross-ebook/dp/B0CC315VJK) Hypermedia Systems: a book on how to build Hypermedia-Driven Applications using htmx & more: https://www.amazon.com/Hypermedia-Systems-Carson-Gross-ebook/dp/B0CC315VJK 

![Hypermedia Systems](https://htmx.org/img/hypermedia-systems.png)

## Why did I use ExpressJS?

ExpressJS is a NodeJS library that provides a framework for creating RESTful web applications. It is easy to use and offers a wide range of features, including support for middleware, routing, and authentication.

## Requirements

To run this example, you will need to have NodeJS and npm installed. 

* NodeJS: https://nodejs.org/

## How to run the example

Once you have NodeJS and npm installed, you can run the example by following these steps:

1. Clone the repository
2. $ cd /path
3. $ npm install
4. $ node index.js
5. open http://localhost:3000

### Quotes from the Lord of the Rings movie

The example uses the [random-lotr-movie-quote](https://www.npmjs.com/package/random-lotr-movie-quote) API to get a list of quotes from the Lord of the Rings movie.

### Prompts to create images

The example uses the [promptmaker](https://github.com/zeke/promptmaker) API to get a list of random prompts.

### Colors

I used the wonderful API from [Colr](https://www.colr.org/api.html)

## How to run the example

To run the example, you will need to have NodeJS and npm installed. Then, run the following commands:

``
git clone https://github.com/diogo-karma/example-htmx-node-express
`` 

2. Change to the directory of the cloned repository:

``
cd example-htmx-node
``

3. Install the dependencies:

``
npm install
``

4. Start the server:

``
node index.js
``

This will start the server on port 3000. You can access the application in your browser at http://localhost:3000.


## Thanks

https://www.colr.org

https://github.com/zeke/promptmaker [@zeke](https://github.com/zeke/)

https://www.npmjs.com/package/random-lotr-movie-quote [@gitfrosh](https://github.com/gitfrosh)

https://htmx.org

https://hypermedia.systems

https://karmas.digital [@diogo-karma](https://twitter.com/davividadiva)

