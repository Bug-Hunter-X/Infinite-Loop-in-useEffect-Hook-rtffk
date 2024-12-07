```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: this effect runs only once after the component mounts
    console.log('Count updated');
  }, []);

  return <div>Count: {count}</div>;
}
```