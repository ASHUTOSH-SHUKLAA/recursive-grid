import Grid from './components/Grid';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <h1>The Recursive Grid</h1>
        <p>Click boxes to increment. Watch the ripple effects!</p>
      </div>
      <Grid />
      <div className={styles.rules}>
        <h3>Rules:</h3>
        <ul>
          <li>📊 Click any box to increment its value</li>
          <li>➗ Divisible by 3? Right neighbor decrements by 1</li>
          <li>🔢 Divisible by 5? Box below increments by 2</li>
          <li>🔒 Value ≥ 15? Box locks permanently (red)</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
