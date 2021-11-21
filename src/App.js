import './index.css';
import { useState } from 'react';

function App() {

  const [ reverse, setReverse ] = useState(false);
  const [ score, setScore ] = useState(40);
  const [ panels, setPanel ] = useState([
    {bg: '#ED1A23', count: 6, id: 0},
    {bg: '#E67229', count: 12, id: 1},
    {bg: '#F0CE60', count: 24, id: 2},
    {bg: '#C4DC5A', count: 38, id: 3},
    {bg: '#69BD44', count: 50, id: 4},
    {bg: '#6ABE45', count: 38, id: 5},
    {bg: '#4CBF9D', count: 24, id: 6},
    {bg: '#2EAAE0', count: 12, id: 7},
    {bg: '#407BBF', count: 6, id: 8},
  ]);

  
  const handleSize = (panel, index) => {
    if (score > 0 && !reverse) {
      let newArr = [...panels];
      console.log('newArrOfPanels => ', newArr);
      newArr[index] = { ...panel, count: panel.count + 2 };
      setPanel(newArr);
    } else if (reverse) {
      let newArr = [...panels];
      console.log('newArrOfPanels => ', newArr);
      newArr[index] = { ...panel, count: panel.count - 2 };
      setPanel(newArr);
    }
    if (score > 0 && !reverse) {
      setScore(score - 1);
    } else if (reverse) {
      setScore(score + 1);
    }
  }

  return (
      <div className="container">
        {
          panels.map((panel, index) => 
            <div
              onClick={
               () => handleSize(panel, index)
              }
              key={panel.id}
              className="panel"
              style={{
              backgroundColor: panel.bg,
              height: panel.count * 10
            }}>
              {panel.count}
            </div>
          )
        }
        <div className="score">{score}</div>
        <div onClick={() => setReverse(!reverse)} style={reverse ? {background: 'rgb(80, 120, 40)'} : {background: 'rgb(100, 100, 100)'}} className="btn">Reverse</div>
      </div>
  );
}

export default App;
