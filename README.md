# React-JS
This Repository documenting the journey with React from foundational concepts to handling APIs, state management, and dynamic UI building.

- Task 1
  ![Greet Component](/Tasks/1.png)

`Greet.jsx`

```
function Greet() {
console.log("Welcome!");
}

export default Greet;

let Greet = ()=> {
console.log("Welcome!");
}

export default Greet;
```

`App.jsx`

```
import React from "react";
import Greet from "./components/Greet";

const App = () => {
  return <Greet />;
};

export default App;
```

- Task 2
  ![Greet Component](/Tasks/2.png)

  `Header.jsx`

  ```
  let Header = () => {
  return (
    <header>
      <h1>Welcome to My Website!</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
      </nav>
    </header>
  );
  };

  export default Header;
  ```

  `Footer.jsx`

```
let Footer = ()=> {
    return <footer>
        <p>&copy 2024 My Website</p>
    </footer>
}

export default Footer;
```

`MainContent.jsx`

```
let MainContent = () => {
  return  <main>
      <h2>Main Content</h2>
      <p>Welcome to the Website, Hope you are doing well</p>
    </main>

};

export default MainContent;
```

`App.jsx`

```
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
```

- Task 3
  ![WelcomeMessage](/Tasks/3.png)

`WelcomeMessage.jsx`

```
let WelcomeMessage = ()=> {
    return <div>
        <h1>Hello World!</h1>
        <p>Welcome to learning JSX!</p>
    </div>
}

export default WelcomeMessage;
```

`App.jsx`

```
import React from "react";
import WelcomeMessage from "./components/WelcomeMessage";

const App = () => {
  return (
    <div>
      <WelcomeMessage />
    </div>
  );
};

export default App;
```

You have to close every tag in JSX
Should use `classname` to assign class

- Task 4
  ![WelcomeMessage](/Tasks/4.png)

`JSXRules.jsx`

```
let JSXRules = ()=> {
    return <div>
        <h1>JSX Rules</h1>
        <p>JSX must return a single parent element.</p>
        <p>JSX elements must be properly closed</p>
        <p>JSX attributes are written using camelCase (e.g., className instead of class)</p>
    </div>
}

export default JSXRules;
```

`App.jsx`

```
import React from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import JSXRules from "../JSXRules";

const App = () => {
  return (
    <div>
      <JSXRules />
    </div>
  );
};

export default App;
```

- Expressions

```
const App = () =>{
  return <p>{2+2}</p>; // 4 will be displayed basically you can write js inside curly braces
}
```

- Task 5
  ![Dynamic](/Tasks/5.png)

`Greeting.jsx`

```
let Greeting = () => {
  let name = "John";
  let date = new Date();
  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>Date: {date.getDate()}</p>
    </div>
  );
};

export default Greeting;

```

`ProductInfo.jsx`

```
let ProductInfo = () => {
  let product = {
    name: "Laptop",
    price: 1200,
    availability: "In Stock",
  };
  return (
    <div>
      <h1>Name : {product.name}</h1>
      <h1>Price : ${product.price}</h1>
      <h1> Availability : {product.availability} </h1>
    </div>
  );
};

export default ProductInfo;

```

`App.jsx`

```
import React from "react";
import Greeting from "./components/Greeting";
import ProductInfo from "./components/ProductInfo";

const App = () => {
  return (
    <div>
      <Greeting />
      <ProductInfo />
    </div>
  );
};

export default App;

```

- Lists

If you want to remove or update anything from the array you should have to assign unique key to each element of array

- Task 6
  ![Map](/Tasks/6.1.png)
  ![Map](/Tasks/6.2.png)

`UserList.jsx`

```
let UserList = () => {
  const users = [
    {
      id: 1,
      name: "Alice",
      age: 25,
    },
    {
      id: 2,
      name: "Bob",
      age: 30,
    },
    {
      id: 3,
      name: "Charlie",
      age: 22,
    },
  ];

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h1>Name: {user.name}</h1>
          <p>Age: {user.age}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
```

`ProductList.jsx`

```
let ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Phone",
      price: "$699",
    },
    {
      id: 2,
      name: "Laptop",
      price: "$1200",
    },
    {
      id: 3,
      name: "Headphones",
      price: "$199",
    },
  ];

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

```

`App.jsx`

```
import React from "react";
import UserList from "./components/UserList";
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <div>
      <UserList />
      <ProductList />
    </div>
  );
};

export default App;

```

- Props

![props](/Tasks/props.png)
![props](/Tasks/props2.png)

- Task 7
  ![props](/Tasks/7.png)

`Person.jsx`

```
let Person = (props)=>{
    return <div>
        <h2>Name: {props.name}</h2>
        <p>Age: {props.age}</p>
    </div>
}

export default Person;
```

`Product.jsx`

```
let Product = ({name, price}) => { // Used Destructuring
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Price: {price}</p>
    </div>
  );
};

export default Product;

```

`App.jsx`

```
import React from "react";
import Person from "./components/Person";
import Product from "./components/Product";
const App = () => {
  return (
    <div>
      <Person name="Harsh" age={26} />
      <Product name="Laptop" price={66000} />
    </div>
  );
};

export default App;
```

- Conditional Rendering

- Task 8

![Conditional Rendering](/Tasks/8.1.png)
![Conditional Rendering](/Tasks/8.2.png)

`Weather.jsx`

```
let Weather = ({ temperature }) => {
  if (temperature < 15) {
    return <p>It's cold outside!</p>;
  } else if (temperature >= 15 && temperature <= 25) {
    return <p>It's nice outside!</p>;
  } else {
    return <p>It's hot outside!</p>;
  }
};

export default Weather;
```

`UserStatus`

```
let UserStatus = ({loggedIn, isAdmin}) => {
  if (loggedIn && isAdmin) {
    return <p>Welcome Admin!</p>;
  }
  else if(loggedIn){
    return <p>Welcome User</p>
  }
  else{
    return <p>Get OUT!</p>
  }
};

export default UserStatus;
```

`GreetingAgain.jsx`

```
const GreetingAgain = ({timeOfDay})=>{
    if(timeOfDay === "morning"){
        return <p>Good morning!</p>
    }
    else if(timeOfDay === "afternoon"){
        return <p>Good afternoon!</p>
    }
    else{
        return <p>Good Night</p>
    }
}

export default GreetingAgain;
```

- Styling

Inline style : you have to create attribute named 'style' to any element and structure will be like this :

```
<h1 style={{ color: "white", backgroudColor: "teal"}}>
Inline Style // Double curly braces and properties should be in camelCase
</h1>
```

External style : At the top

```
import "./index.css";
```

- React Icons

- Task 9

![Styling](/Tasks/9.1.png)
![Styling](/Tasks/9.2.png)

`StyledCard.jsx`

```
const StyleCard = () => {
  return (
    <div
      style={{
        color: "darkblue",
        backgroundColor: "lightblue",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h1>StyleCard</h1>
    </div>
  );
};

export default StyleCard;
```

`ProfileCard.jsx`

```
const ProfileCard = () => {
  let styles = {
    backgroundColor: "lightgray",
    padding: "15px",
    borderRadius: "8px",
    color: "black",
  };
  return <div style={styles}>
      <h1>ProfileCard</h1>
  </div>;
};

export default ProfileCard;

```

`IconComponent.jsx`

```
import { FaBeer } from "react-icons/fa";

const IconComponent = ()=>{
    return <FaBeer style={{fontSize: "30px", color: "gold"}} />
}

export default IconComponent;
```

`App.jsx`

```
import React from "react";
import StyleCard from "./components/StyledCard";
import ProfileCard from "./components/ProfileCard";
import IconComponent from "./components/IconComponent";

const App = () => {
  return <div>
    <StyleCard/>
    <ProfileCard/>
    <IconComponent/>
  </div>;
};

export default App;

```

- Button & Event Handlers

- State

- Hooks

- useState()

- Task 10

![UseState](/Tasks/10.1.png)
![UseState](/Tasks/10.2.png)

`Counter.jsx`

```
import { useState } from "react";

let Counter = () => {
  let [count, setCount] = useState(0);
  let handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default Counter;
```

`TodoList.jsx`

```
import { useState } from "react";

let TodoList = () => {
  let [item, setItem] = useState([]);
  let [inputVal, setInputVal] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    if (inputVal.trim()) {
      setItem([...item, inputVal]);
      setInputVal("");
    }
  };

  let handleChange = (e) => {
    setInputVal(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputVal} onChange={handleChange} />
        <button type="submit">Add new item</button>
      </form>

      <ul>
        {item.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
```

`Profile.jsx`

```
import { useState } from "react";

const Profile = () => {
  // Initialize state with an object containing name and age
  const [profile, setProfile] = useState({
    name: "",
    age: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={profile.age}
            onChange={handleChange}
          />
        </label>
      </div>
      <h3>Profile Information</h3>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
    </div>
  );
};

export default Profile;

```

`ShoppingList.jsx`

```
import { useState } from "react";

let ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !quantity) return;

    const newItem = {
      name,
      quantity: parseInt(quantity),
    };

    setItems((prevItems) => [...prevItems, newItem]);

    setName("");
    setQuantity("");
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ShoppingList;

```

`App.jsx`

```
import React from "react";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import Profile from "./components/Profile";
import ShoppingList from "./components/ShoppingList";

const App = () => {
  return (
    <div>
      <Counter />
      <TodoList />
      <Profile />
      <ShoppingList />
    </div>
  );
};

export default App;
```

- useEffect

You can't use useEffect inside the if else but you can use if else inside the useEffect

- Task 11

![useEffect](/Tasks/11.png)

`BasicEffect.jsx`

```
import { useEffect } from "react";

let BasicEffect = () => {
  useEffect(() => {
    console.log("Use Effect Rendered");
  }, []);

  return <h1>Check the Console</h1>;
};

export default BasicEffect;
```

`CounterEffect.jsx`

```
import { useEffect, useState } from "react";

const CounterEffect = () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Increment ${count}`;
  }, [count]);

  let handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default CounterEffect;

```

`FetchDataEffect.jsx`

```
import { useEffect, useState } from "react";

const FetchDataEffect = () => {
  const [data, setData] = useState([]);

  let fetchData = async () => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    let result = await response.json();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Posts:</h1>
      {data.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default FetchDataEffect;
```

`App.jsx`

```
import React from "react";
import BasicEffect from "./components/BasicEffect";
import CounterEffect from "./components/CounterEffect";
import FetchDataEffect from "./components/FetchDataEffect";

const App = () => {
  return (
    <div>
      <BasicEffect />
      <CounterEffect />
      <FetchDataEffect />
    </div>
  );
};

export default App;
```

- Props Drilling

- Context API

- Task 12

![useContext](/Tasks/12.png)

`UserContext.jsx`

```
import { useState } from "react";
import { createContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  let [user, setUser] = useState({ name: "Hiroshi", age: 22 });

  let updateUser = (newName) => {
    setUser({ name: newName });
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
```

`UserProfile.jsx`

```
import { useContext } from "react";
import { UserContext } from "./UserContext";

const UserProfile = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>User Profile</h1>
      <h2>Name: {user.name}</h2>
    </div>
  );
};

export default UserProfile;
```

`UpdateUser.jsx`

```
import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const UpdateUser = () => {
  const { updateUser } = useContext(UserContext);
  const [newName, setNewName] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();

    if (newName.trim()) {
      updateUser(newName);
      setNewName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newName}
        placeholder="Enter the Name"
        onChange={(e) => setNewName(e.target.value)}
      />
      <button type="submit">Update Name</button>
    </form>
  );
};

export default UpdateUser;
```

`App.jsx`

```
import React from "react";
import UserProfile from "./components/UserProfile";
import UpdateUser from "./components/UpdateUser";
import { UserProvider } from "./components/UserContext";

const App = () => {
  return (
    <UserProvider>
      <UserProfile />
      <UpdateUser />
    </UserProvider>
  );
};

export default App;
```

- useReducer

- Task 13

### Exercise: Using `useReducer` in React

In this exercise, you will learn how to:

- Define a reducer function to manage state logic
- Use the `useReducer` hook to manage complex state in a React component
- Dispatch actions to update state

---

### Step 1: Setting Up the Reducer Function

1. Create a new file called `counterReducer.js`.
2. Inside this file, define a reducer function that will manage a simple counter's state.

### Step 2: Using `useReducer` Hook

1. Create a new file called `Counter.jsx`.
2. Inside this file, create a functional component called `Counter`.
3. Use the `useReducer` hook to manage the state of the counter.

### Step 3: Extending the Reducer with More Actions

1. Modify the `counterReducer.js` file to add more actions for increasing and decreasing by a specific amount.

### Step 4: Using Payloads in Actions

1. Update the `Counter.jsx` file to allow the user to increase or decrease the count by a specific value using an input field.

### Step 5: Rendering the Counter in `App.jsx`

1. In your `App.jsx` file, import and render the `Counter` component.

```jsx
import React from "react";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <h1>React useReducer Example</h1>
      <Counter />
    </div>
  );
}

export default App;
```

`counterReducer.js`

```
const initialState = { count: 0 };

function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "incrementByAmount":
      return { count: state.count + action.payload };
    case "decrementByAmount":
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

export { initialState, counterReducer };
```

`Counter2.jx`

```
import React, { useReducer, useState } from "react";
import { counterReducer, initialState } from "./counterReducer";

const Counter2 = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [inputValue, setInputValue] = useState(0);

  const handleIncrement = () => dispatch({ type: "increment" });
  const handleDecrement = () => dispatch({ type: "decrement" });

  const handleIncrementByAmount = () =>
    dispatch({ type: "incrementByAmount", payload: Number(inputValue) });
  const handleDecrementByAmount = () =>
    dispatch({ type: "decrementByAmount", payload: Number(inputValue) });
  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleIncrementByAmount}>Add</button>
        <button onClick={handleDecrementByAmount}>Subtract</button>
      </div>
    </div>
  );
};

export default Counter2;
```

`App.jsx`

```
import React from "react";
import Counter2 from "./components/Counter2";

const App = () => {
  return <Counter2 />;
};

export default App;
```

- useRef

- Task 14

### Exercise: Using `useRef` in React

In this exercise, you will learn how to:

- Use `useRef` to reference DOM elements.
- Use `useRef` to store values that persist between renders without triggering re-renders.

---

### Step 1: Accessing a DOM Element with `useRef`

1. Create a new file called `FocusInput.jsx`.
2. Inside this file, create a functional component that will focus on an input field when a button is clicked, using the `useRef` hook.

### Step 2: Persisting Values Between Renders with `useRef`

1. Create a new file called `Timer.jsx`.
2. Inside this file, create a component that implements a simple timer, where the timer’s interval is stored using `useRef`.

`FocusInput.jsx`

```
import React from "react";
import { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Click BUTTON to Focus" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default FocusInput;

```

`Timer.jsx`

```
import { useRef, useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <h1>Timer: {count} seconds</h1>
      <button onClick={() => clearInterval(intervalRef.current)}>
        Stop Timer
      </button>
    </div>
  );
};

export default Timer;
```

`App.jsx`

```
import React from "react";
import FocusInput from "./components/FocusInput";
import Timer from "./components/Timer";

const App = () => {
  return (
    <div>
      <FocusInput />
      <Timer />
    </div>
  );
};

export default App;
```

- Custom Hooks

- Task 15

### Exercise: Creating and Using Custom Hooks in React

In this exercise, you will learn how to:

- Create a custom hook that encapsulates state and logic.
- Reuse the custom hook in multiple components.
- Create hooks for handling form inputs and fetch data from an API.

---

### Step 1: Create a Custom Hook for Toggling a Boolean State

1. Create a new file called `useToggle.js`.
2. Inside this file, define a custom hook `useToggle` that toggles a boolean value between `true` and `false`.

### Step 2: Use the Custom Hook in a Component

1. Create a new file called `ToggleComponent.jsx`.
2. Inside this file, create a component that uses the `useToggle` hook to toggle a message.

### Step 3: Create a Custom Hook for Form Input Management

1. Create a new file called `useInput.js`.
2. Inside this file, define a custom hook `useInput` that handles form input changes.

### Step 4: Use the `useInput` Hook in a Form Component

1. Create a new file called `FormComponent.jsx`.
2. Inside this file, create a form component that uses the `useInput` hook to manage multiple input fields.

### Step 5: Create a Custom Hook for Fetching Data from an API

1. Create a new file called `useFetch.js`.
2. Inside this file, define a custom hook `useFetch` that fetches data from an API and returns the data, loading state, and any error.

### Step 6: Use the `useFetch` Hook to Fetch Data in a Component

1. Create a new file called `FetchComponent.jsx`.
2. Inside this file, create a component that uses the `useFetch` hook to display data from an API.

### Step 7: Render All Components in `App.jsx`

1. In your `App.jsx` file, import and render the `ToggleComponent`, `FormComponent`, and `FetchComponent` components.

```jsx
import React from "react";
import ToggleComponent from "./ToggleComponent";
import FormComponent from "./FormComponent";
import FetchComponent from "./FetchComponent";

function App() {
  return (
    <div>
      <h1>React Custom Hooks Examples</h1>
      <ToggleComponent />
      <FormComponent />
      <FetchComponent />
    </div>
  );
}

export default App;
```

---

`useFetch.jsx`

```
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
```

`useInput.jsx`

```
import { useState } from "react";

const useInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
};

export default useInput;
```

`useToggle.jsx`

```
import { useState } from "react";

const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue((prevValue) => !prevValue);
  return [value, toggle];
};

export default useToggle;
```

`FetchComponent.jsx`

```
import useFetch from "../hooks/useFetch";

const FetchComponent = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default FetchComponent;
```

`FormComponent.jsx`

```
import useInput from "../hooks/useInput";

const FormComponent = () => {
  const name = useInput("");
  const email = useInput("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${name.value}, Email: ${email.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input type="text" {...name} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" {...email} />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
```

`ToggleComponent.jsx`

```
import useToggle from "../hooks/useToggle";

const ToggleComponent = () => {
  const [isToggled, toggle] = useToggle();

  return (
    <div>
      <button onClick={toggle}>{isToggled ? "Hide" : "Show"} Message</button>
      {isToggled && <p>This is a toggled message!</p>}
    </div>
  );
};

export default ToggleComponent;
```

`App.jsx`

```
import FetchComponent from "./components/FetchComponent";
import FormComponent from "./components/FormComponent";
import ToggleComponent from "./components/ToggleComponent";

function App() {
  return (
    <div>
      <h1>React Custom Hooks Examples</h1>
      <ToggleComponent />
      <FormComponent />
      <FetchComponent />
    </div>
  );
}

export default App;
```

- useId

`UniqueID.jsx`

```
import { useId, useState } from "react";

const UniqueID = () => {
  const id = useId();

  return (
    <div>
      <label htmlFor={`${id}-email`}>Email</label>
      <input type="email" id={`${id}-email`} />

      <br />
      <label htmlFor={`${id}-name`}>Name</label>
      <input type="text" id={`${id}-name`} />
    </div>
  );
};

export default UniqueID;
```

`App.jsx`

```
import UniqueID from "./components/UniqueID";

const App = () => {
  return (
    <div>
      <UniqueID />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
        consequatur quos quidem cupiditate voluptatem aliquam consequuntur
        excepturi placeat, officia eos commodi et voluptatum beatae quis dicta
        repellat vero maiores nulla.
      </p>
      <UniqueID />
    </div>
  );
};
export default App;
```
