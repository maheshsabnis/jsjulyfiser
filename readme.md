Rendering ?

- Dynmaic generation of UI ? - JSP/ Spting Boot - ASP.NET /MVC - PHP
- Static UI (HTML/Server-Side Controls)
  Generate HTML Stream + Provides JavaScript to Manipulate the Generated HTML

=================================================================
JavaScript - Libraries - Single Reposnsibility principal based JS object model. e.g. jQuery, Knockoutjs, React.js, D3.js, bootsratp css - Frameworks - E2E support for Front-End in browser - UI, AJAX, Data, - Angular, Extjs, Ember, Vue, etc

Ext.js + JavaScript (Front-End)
Express.js (Middleware for REST API) on Node.js
Node.js Runtime to execute JavaScript on Server
MongoDb (JSON Document based NoSQL Database)

# MEAN / EEAN

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
   1. # Used to Execute JavaScript out of Browser

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
      1. arguments array
         1. Default array used for variable number of parameters
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
   2. # Methods from Window Object 1. getElementById() returns a single DOM element 2. getElementsByName() return an array of DOM elements having same value for the 'name' attribute 3. getElementsByTagName(), returns an array of DOM elements having same tag 4. addEventListener() a method to subscribe to a DOM element 5.
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

==========================================================================================================================================
JavaScript Functions

1. JavaScript Function Types

   1. Reference Functions
      1. Function reference will be stored in a variable. This variable will act as function object.
      2. This function will not have 'name'.
      3. e.g.
         1. var fn = function(){......}
         2. The function body will contain functions in it
            1. All functions prefixed with 'this.' will be publically accessible functions otherwise these functions will br private to the function object.
      4. The reference functions can be 'prototyped' for adding extended functionalities
   2. Named Functions those return an Object-Literal
      1. e.g {}
      2. The Object-Literal containts Key:Value pair for publically exposed functions and properties
      3. e.g.
         1. function XYZ (args) {return {KEY1:VALUE2,,,,,}}
   3. Immediately Invoked Function Expression (IIFE)
      1. The JavaScript Function that will be invoked imediately when it declared or defined.
      2. syntax
         1. (function(){......})();

2. Used to define a module (?) with
   1. Presenter logic
      1. Static UI Models
      2. Subscribe with Events for UI Elements
      3. Manipulated UI Property System
   2. Business Logic
      1. Custom Domain Validations
      2. UI side Calculations based on Domain
   3. Utilities
3. Functions w/o return values
4. Function with return statement
5. JavaScript Module means
   1. Contains Fucntion(s) with Private and Public funcionalities in it
   2. Conatains Function(s) with prototypes for extended functionalities

Ex 4: Create a ProductLogic Function that will perform CRUD Operations on Products Array with following Product Properties (Immediately)

- ProductRowId, ProductId, ProductName, CategoryName, Manufacturer, Description, BasePrice (Immediately)
- Create a HTML UI, that will have text elements for ProductRowId, ProductId, ProductName, BasePrice and Description. The CategoryName and Manufacturer will be <select> element which will be dynamically filled using Categories and Manufacturers arrays from the ProductLogic function. (Immediately)
- The HTML will have UI with buttons to perfrom Create, Update operations (Immediately)
- The HTML Table will list all Products. The HTML table shoud have Delete button for each row to delete the selected product record. (Friday)
- Add radio buttons above HTML table to Sort/reverse the Products data based on productname and manufacturers (Friday)

#####################################################################################
Day 4.

1. HTML 5 Programming (?)
   1. The HTML UI + Inline JavaScript + Inline CSS3
   2. UI
      1. Date Famility UI Elements
      2. Numneric UI Elements
      3. Text-Filter UI Element
      4. Charts
      5. Email
      6. Self Validating UI Elements
         1. <form></form>
            1. Contains a Dictionary aka FormModel of all form elements(?)
               1. Form Elements, they are the Editable elements inside <form> tage having 'name' attribute
               2. When the <form>.onSubmit() takes place the disctionary withe name:value pair will be posted/submitted
      7. Forms Elements
         1. datalist
            1. An attribute of Input element that is used to provide the search based filter for the input text element
            2. The <datalist></datalist> is a HTML API Tag that overrides <select> element
   3. APIs
      1. Drag-Drop
         1. Used to Dynamically update DOM based on Events
         2. HTML 5 Drag Atributes
            1. 'draggable', boolean , if set to true then the item will be available for dragging
            2. Events
               1. dragstart, start dragging the draggable DOM element
                  1. provides the Event Arguments object with 'dataTransfer' object
                     1. set and get the data of DOM element to be dragged and dropped
               2. drop, completes the Drop operation on DOM element
               3. dragover, set the DOM elements' linking with mouse movment
      2. Resources
         1. Files
            1. Text, BLOB, ArrayBuffer, Xml, JSON
               1. audio and video tags
               2. window.files()
               3. FileReader()
         2. Storage
            1. indexedDB
            2. localStorage
            3. sessionStorage
         3. Threads
            1. WebWorker
         4. Media
            1. Canvas
            2. SVG
         5. Sensors
            1. navigator object for geolocation
            2. Netwoking
               1. WiFi
            3. USB
            4. Printer
            5. Camera
            6. Audio Devices
      3. Networking
         1. AjAX (Server-Dependent)
         2. Socket (Server Dependnat)
2. Asynchronous Programming
   1. Working with AJAX Patterns
3. Libraries and/or Frameworks

Ex 5: Complete the Shopping Cart App with following UI/UX needs

- Disply Price of Each item in li element
- When the li is dragged And dropped the lstCart should show the dropped elemnts and the botton of the target div should show the total price.
- If the li is drag-droped multiple times then the count of the li in lst cart should be increamented, the lstCart should also have facility to delete dropped items (YOU DESING UI Accordingly)


####################################################################################
Ex 6: Modify the Exercise 4 of Products to perform AJAX calls to the Products REST APIs using XmlHttpRequest object
=====================================================================================

Ext.js
1. UI COmponents
   1. Default behavior and layouting
2. MVC and MVVM
   1. Model
      1. Defines the schema of the type of data to be shown on View
      2. Store
         1. THis is the state-management containser for the View and COntroller based on the Model
            1. COntains initial state for the data
            2. Proxy
               1. Encapsulate all  external calls (AJAX) to define an init state
   2. Controller
      1. Behavior manager for View
         1. USes Data from Store and apply to View
   3. View
      1. ExtJs COmponents to define User Interface
      2. Pluins to provide HTML UI Object Model with its own Property and Eventing System  
3. ExtJs CDN
<link href="https://cdnjs.cloudflare.com/ajax/libs/extjs/6.0.0/classic/theme-classic/resources/theme-classic-all.css" rel="stylesheet" />
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/extjs/6.0.0/ext-all.js"></script>

4. if using ExtJs Generator app
   1. npm install -g ext-gen
5. To Create a project
   1. ext-gen app <APP-NAME>
