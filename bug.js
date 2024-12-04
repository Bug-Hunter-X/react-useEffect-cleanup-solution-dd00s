```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render, including the initial render.
    console.log('Count:', count); //This will log to the console
    return () => {
      // Cleanup function (runs before the next effect or component unmount)
      console.log('Cleanup'); //This will also log to the console
    };
  }, [count]); //The effect only runs if 'count' changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```