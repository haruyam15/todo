import styles from './App.module.css';
import Bottom from './components/Bottom';
import Content from './components/Content';
import Header from './components/Header';
import TodoListProvider from './context/TodoListContext';

function App() {
  return (
    <div id={styles.wrap}>
      <TodoListProvider>
        <Header />
        <Content />
        <Bottom />
      </TodoListProvider>
    </div>
  );
};


export default App;
