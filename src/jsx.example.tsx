import React, { createElement as e, useState } from 'react';

function App() {
  // return (
  // <h1>Hello React</h1>
  // );
  // кортеж - заранее известные параметры (массив в данном случае)
  const [count, setCount] = useState(0)
  return (
    // React.createElement('h1', {}, 'Hello from js')
    e('div', { className: 'container mx-auto' }, [
      e('h1', { className: 'font-bold', key: 1 }, `Hello from js ${count}`),
      e('button', {
        className: 'py-2 px-2 border',
        key: 2,
        onClick: () => setCount(count + 1)
      }, 'click')]
    )
  )
}

export default App;
