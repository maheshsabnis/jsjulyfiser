Rendering ?
- Dynmaic generation of UI ?
	- JSP/ Spting Boot
	- ASP.NET /MVC
	- PHP
- Static UI (HTML/Server-Side Controls)
	Generate HTML Stream + Provides JavaScript to Manipulate the Generated HTML


=================================================================
JavaScript
	- Libraries
		- Single Reposnsibility principal based JS object model. e.g. jQuery, Knockoutjs, React.js, D3.js, bootsratp css 
	- Frameworks
		- E2E support for Front-End in browser
			- UI, AJAX, Data, 
			- Angular, Extjs, Ember, Vue, etc

Ext.js + JavaScript (Front-End)
Express.js (Middleware for REST API) on Node.js
Node.js Runtime to execute JavaScript on Server
MongoDb (JSON Document based NoSQL Database)

MEAN / EEAN
======================================================================

JavaSCript App development
1. IDE
   1. Visual Studio Code (VSCode)
      1. https://code.visualstudio.com
      2. Plugins
         1. JavaSCript, HTML
         2. JS Libs and Frwks
   2. Eclipse JavaScript IDE
2. Temp Http Server
   1. Used for execting JavaScript in Browser
   2. e.g. Live Server in VS Code
3. Node.js
   1. Used to Execute JavaScript out of Browser
===========================================================================

JavaScript Objects
1. variable declarations
   1. This is declarated using the 'var' keyword
   2. Note: The variable declaraed using var is 'always function scoped' variable.
2. Type System
   1. array declaration using []
   2. string declarations using '' or ""
   3. Date
3. Objects
   1. Object
   2. Literal aka JSON Object
   3. Function (Heart of JavaScript)
   4. String
   5. Array
   6. Date
   7. Event
      1. All events must be subscribed by using the function
         1. e.g. <object>.<event> = function(){....}
4. Operators
5. Loops
6. Conditions
7. Window Object
   1. The Browser
8. Document Object
   1. The DOM loaded in side the browser
   2. Methods from Window Object
      1. getElementById() returns a single DOM element
      2. getElementsByName() return an array of DOM elements having same value for the 'name' attribute
      3. getElementsByTagName(), returns an array of DOM elements having same tag
      4. addEventListener() a method to subscribe to a DOM element
      5. 
=======================================================================================
Day 2

JavaScript Collection Objects (ECMA Collection Objects)
- Array
  - Collection Foundation for storing Data in Browser
  - By Default is an Object
    - Properties
    - Methods
- String
  - Character based array is 'String'
    - a special parser to parse strings having
      - Only Characters
      - String starts with numeric values
    - String with escape sequence embedding 
- Exercise 2: Generate table from Array of JSON ojects w/o hard-coing properties of Objects in HTML table headers and rows (Immediately)
- Exercise 3: Create a HTML Page that will show string in <div> tag.
- E.g. JavaScript is a Fornt-End Browser programming language. this is compotible to all browsers. This provides objects, methods, types to write loginc to manipulate HTML. this is a great technology.
- Add buttons on this page as follows
  - SentenceCase -> Click on this button will change the string in sentence case
  - Button to print number of blank spaces in the string. (immediately)
  - Button to print number of words in string (immediately)
  - Button to convert the first character of each word in upper case.
- Add text box and enter a charcter/word in it. Once the 'blur' event of the textbox is raised print the frequency of that character / word in the string.  




















