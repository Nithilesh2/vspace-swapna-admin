import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Progressbars = () => {
  const circularValues = [
    { value: 75, label: '75%', color: '#00b894' },
    { value: 71, label: '71%', color: '#00b894' },
    { value: 46, label: '46%', color: '#ff7675' },
  ];

  const progressBarValues = [
    { value: 51, label: 'Lorem ipsum sit', color: '#ff7675' },
    { value: 78, label: 'Lorem ipsum sit', color: '#00b894' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '80%' }}>
        {circularValues.map((item, index) => (
          <div key={index} style={{ width: '100px', textAlign: 'center' }}>
            <CircularProgressbar
              value={item.value}
              text={item.label}
              styles={buildStyles({
                pathColor: item.color,
                textColor: '#333',
                trailColor: '#dfe6e9',
              })}
            />
            <p>Lorem ipsum dolor sit amet dolor</p>
          </div>
        ))}
      </div>

      <div style={{ width: '80%', marginTop: '20px' }}>
        {progressBarValues.map((item, index) => (
          <div key={index} style={{ marginBottom: '15px' }}>
            <h5>{item.value}%</h5>
            <ProgressBar now={item.value} label={`${item.label}`} variant={item.color === '#00b894' ? 'success' : 'danger'} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progressbars;
