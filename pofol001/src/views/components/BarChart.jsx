import React from 'react';
import styles from '../css/BarChart.module.css';

const data = [
  { label: 'HTML', percentage: 70 },
  { label: 'CSS', percentage: 70 },
  { label: 'ReactJS', percentage: 50 },
  { label: 'Github', percentage: 40 },
];

const BarChart = () => {
    return (
      <div className={styles['bar-chart']}>
        {data.map(item => {
          console.log(item); // 데이터 확인용 로그
          return (
            <div key={item.label} className={styles['bar-container']}>
              <div className={styles['bar-label']}>{item.label}</div>
              <div className={styles['bar-fill']} style={{ width: `${item.percentage}%` }}>
                <span className={styles['bar-percentage']}>{item.percentage}%</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
export default BarChart;
