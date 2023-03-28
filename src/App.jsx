function App() {
  function* generator() {
    yield 1;
    yield 2;
    yield 3;
  }

  const handleClick = () => {
    const a = generator().next();
    console.log(a);
  };

  return <button onClick={handleClick}>点击点击</button>;
}

export default App;
