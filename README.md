## SayWhat?!
<a href="say-what.netlify.com">SayWhat??!</a> is a responsive full-stack app where users can look at analytics around speeches.
![Alt text](startingOut.jpg?raw=true "Starting Out")
![Alt text](uiInProcess.jpg?raw=true "Searching")
![Alt text](searchResults.jpg?raw=true "Search Results")
![Alt text](previewingMacros.jpg?raw=true "Previewing Macros")

## Getting Started
**Installing**
Install client & server files using separate terminal windows.
```
Client
>   git clone https://github.com/imagineLife/say-what.git
>   cd say-what
>   npm install

Server
>   git clone https://github.com/imagineLife/say-what-api.git
>   cd say-what-api
>   npm install
```
**Launching**
Launch client & server from respective separate client & server terminal windows.
```
Client
>   npm start

Server
>   nodemon server.js
```
Then open [`localhost:3000`](http://localhost:3000) in a browser.
**Testing**
```
>   npm test
```


## Technology Used
**Front**<br />
HTML<br />
CSS<br />
JavaScript<br />
React & Redux<br />
<D3 <br/>

<br/>

**Backend**<br />
Node.js + Express (web server)<br />
MongoDB & Mongoose (database & object data modeling)<br />
Enzyme (testing)<br />

<br />

**Responsive Design**<br />
The app is designed & built with a mobile-first approach,
and fits tablets and desktops as well.

<br />

**Security**<br />
User passwords are encrypted using bcrypt.js.
Passport protects enpoints from unauthorized access and  







