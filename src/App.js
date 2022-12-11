import Bottom from './components/Bottom';
import Content from './components/Content';
import Header from './components/Header';
import TodoListProvider from './context/TodoListContext';

function App() {

  return (
    <TodoListProvider>
      <Header />
      <Content />
      <Bottom />
    </TodoListProvider>
  );
};


export default App;
