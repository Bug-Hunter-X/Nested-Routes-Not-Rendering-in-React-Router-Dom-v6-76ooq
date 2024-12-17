```javascript
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/parent" element={<Parent />}>
          <Route path="child1" element={<Child1 />} />
          <Route path="child2" element={<Child2 />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }
function NotFound() { return <h1>404 Not Found</h1>; }

function Parent() {
  return (
    <div>
      <h2>Parent Route</h2>
      <Outlet />
    </div>
  );
}

function Child1() { return <h1>Child 1</h1>; }
function Child2() { return <h1>Child 2</h1>; }
export default App;
```