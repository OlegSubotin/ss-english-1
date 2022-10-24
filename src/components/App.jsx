import tasksSelect from '../database/select.db';
import tasksInput from '../database/input.db';
import Select from "./Select";
import Input from './Input';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 18,
        color: '#010101'
      }}
    >
      <Select tasks={tasksSelect} />
      <hr />
      <Input tasks={ tasksInput}/>
    </div>
  );
};
