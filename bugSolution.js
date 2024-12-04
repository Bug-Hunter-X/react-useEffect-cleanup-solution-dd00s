```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
      console.log('Cleanup'); //This will log when the component is unmounted or when 'isRunning' becomes false
    };
  }, [isRunning]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
    </div>
  );
}
```