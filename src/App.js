import TodoList from './components/TodoList';
import Header from './components/Header';
import TodoListProvider from './context/DarkModeContext';
import { useState, useEffect } from 'react';

function App() {
  const [tabs, setTabs] = useState(()=> getTabs());

  const tabChanger = (tabName)=> {
    setTabs((tabs)=> tabs.map((tab)=> {
      if(tab.name === tabName){
        return (
          {...tab, selected : true}
        )
      }else{
        return (
          {...tab, selected : false}
        )
      }
    }))
  }

  useEffect(() => {
      localStorage.setItem('tabs', JSON.stringify(tabs));
  }, [tabs]);

  return (
    <TodoListProvider>
      <Header tabs={tabs} tabChanger={tabChanger} />
      <TodoList tabs={tabs} />
    </TodoListProvider>
  );
};

function getTabs(){
  console.log('getTabs');
  const tabs = JSON.parse(localStorage.getItem('tabs'));
  if(tabs){
      return tabs;
  }else{
      return [
          {
              name : 'All',
              selected :true
          },
          {
              name : 'Active',
              selected :false
          },
          {
              name : 'Completed',
              selected :false
          },
      ];
  }
  
};

export default App;
