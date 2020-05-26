# React and Redux Tutorial

## React.js

React is a light weight Front-end development for web applications.
It uses JSX which is similar to html with embedded js code in {}
Also, it checks components state change to show these changes by React DOM.
However, browsers understand HTML not JSX and here comes the roll of babel to convert JSX into Html to be displayed on browsers.

ReactDom << Virtual Dom: It is one of the main reasons why react is simple and fast.
        -> It updates the Web App based on the changes made on the page.
        -> It links React Components (JSX) to Html App (Hard coded Html)
React basics:
-> React is: Single Page App many components/html files react handle them and contact the server without having two different requests with respect to the server  -> Components (Every render functions return one and only one component)
components are similar to Html Components but actually it is called JSX
-> Events
-> Templates
-> Props & Forms
-> Routes
-> Route parameters
-> Redirects

Babeljs:
->It is imported to the Html page to translate JSX code to Html in order to be displayed on browser
-> To have this translation <script></script> should have a type "/babel"

### Type of Components:

1) Container Component: Contain state created by classes containing lifecycle hooks
2) UI Components: Don't contain state receive data from props created by functions

### Components

React is based on components nested into the main container App sharing data where each component returns one and only one object and there is 2 types of components:

#### Stateless Components (Implemented as functions directly returning object)

They are components with no state which means they don't send data to other components but they receive data from state components in their props. these components are implemented as functions not classes.

#### Containers (Implemented as classes with render method for return)

Containers with a state where they store data and can pass it to other nested components. (Nested components are the components inside containers)
Implemented containers are classes extending the Component from React:

1) After every event the component renders
2) When a function is called by an event the 'this' pointer changes to maintain it
    $ function = event => {this}
3) Forms are used to take inputs from user and submit to a certain event (disable refresh)
    $preventDefault()
4) A button in a form should not be given an event if we are using onSubmit form Event
otherwise only the onClick will be launched 
5) Nesting Components is calling a component from inside a component.
So, all components are nested into App.js top view component
6) any data passed through a component is found in the props which makes the component reusable having same templates with different properties (Where the name props came from)

### Passing Data between Components

#### From container to stateless component to display data
In the container while rendering the nested components the data's state is passed as parameter

#### From child component into Root component
First create a function in the Root component and passing it as parameter to the child component so that the child component can call it and pass data through it. 

#### Copying elements using (...)
Having states in react forbid from changing a state directly to the component this is destructive. So, setState method should be use. Then pushing data into an array predefined in the states of the App component needs copying the array and modifying it then replacing the original array by the modified copy in the setState.  

#### Passing a function to a stateless component
Since the stateless component is going to return JSX block having a button that fires a function from the root component we need to identify it as a function so that it won't be launched everytime we return an object.
Instead of: onClick={function(params)}
            onClick={() => function(params)}

#### Delete An Item
Since any modification can't be made directly to an object in order to avoid destruction in React. As a result, calling the filter function of an array and returning false once the condition matches the item to be removed will solve the demand to delete an item from an array in the component's state.

### CSS in React

Three ways to use css:

1) Each component has its own css:
create ComponentName.css file and import it in ComponentName.js
PS: css file will affect other components also as they are nested components still we can specify in the css code that it affects a certain component.
2) All css in one file
index.css works on all components without being called in any component. 
3) Use Css Modules

### Lifecycle Methods

#### Mounting

Once the web application is launched the component is mounted before rendering so it is the perfect timing for getting data from database.
$ componentDidMount(){}

#### Updating

Sometimes it is needed to do something before an update takes place.
$ componentDidUpdate(){}
Rendering is in the Updating life cycle. It is launched after mounting or after any update if ReDOM realized that the components state is changed.

#### Unmounting

## Router

Install react-router-dom.
-> Surround the  Root Page with BrowserRouter
-> Insert in it the needed Routes to each component.
-> Use an exact path to avoid loading 2 components or wrap them with <Switch></Switch>.
PS: Using <a href="path"></a> in the <nav></nav> asks the server for the navigation
-> Instead use <Link to="path"></Link> from react-router-dom to stop asking server.
or we can use Navlink the only difference is that it adds class='active' in the inspect which might be useful for css files for example to color the active clicked link with a different color.
-> surround the export of a component with 'withRouter' which adds Higher Order Components (HOC) from the 'react-router-dom' in order to be able to receive router props knowing that components called by Routes do receive them by default.
-> To display data in a component based on the passed params in the url the path is added in the navbar and linked to the path ending with ':para_name' and in the props.match the value will be found and based on this value the data is going to be displayed.
-> After a certain event using the props of the router we can redirect the page by: 
history.push('path')

## Redux

Redux is the top layer of React helps with state management of our app: 
        -> Data
        -> UI state
Redux is having a store to be accessed and updated by components in a certain.

It is the solution for having a state in each component that must be accessed by other components. We can't always pass data from root to all other components in the props that makes it complex.

### Libraries

    -> redux
    -> react_redux

### Redux Process

The redux process to be updated by a component:
    -> Component dispatch an action taking as params the action type based on what is implemented in the application and the payload which is the data that is going to be manipulated in the action.
    -> The action is handled to the reducer which is the only function that accesses directly the Central Data Store.
    -> Then components will subscribe to the changes to have their updated props

### Implementation

#### Provide&Store&Reducer

    -> create an instance of createStore from redux prefered location in the **root component**
    -> implement a **folder of reducers** and pass the root-reducer to the created store
    -> implement reducer taking state and action as params then export the function that returns state
    -> wrap the root component by Provider from react-redux and pass the created store as params inside the rendering function of the **ReactRedom**

#### Data to component.props

    -> implement a function in the **component** that takes as params **'state'** from reducer and takes the needed data to return it to props 
    -> in case result should be filtered by a condition in the props of the component the implemented function should have an additional params **'ownProps'**  
    -> component is wrapped with HOC function **'connect'** imported from react-redux taking (function)(ClassName) 

#### Dispatch Action from component

    -> implement a function in the component that takes as params **'dispatch'**
    -> it returns an object that represent a function's name taking a parameter and it calls:
    $ dispatch(type: 'typeInReducer',param:'value')
    PS: Preferable to have a ActionCreator folder with a file exporting all the actions rather than passing them statically. Calling an actionCreator will make it look like:
    $ dispatch(actionCreator(param))
    -> reducer should have a condition with the same type and manipulate action.params to modify the needed initial state and then returns a copy of the state with the modification.
    PS: Not Only return the modified object.
