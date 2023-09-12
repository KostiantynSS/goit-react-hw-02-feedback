import Control from './Control/Control';
import Title from './Title/Title';
import Statistics from './Statistics/Statistics';
import StatData from './StatData/StatData';
export const App = () => {
  return (
    <div
      style={{
        padding: 15,
      }}
    >
      <Title />
      <Control />
    </div>
  );
};
