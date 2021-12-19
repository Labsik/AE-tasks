import './App.css';
import Table from './containers/Table';
import TaskCreator from './containers/TaskCreator';
import TasksList from './containers/TasksList';

function App() {
  return (
    <div className="App">
      <TaskCreator/>
      <TasksList/>
      <hr/>
      {/* <Table/> */}
    </div>
  );
}

export default App;
