# The Recursive Grid 🎯

An interactive 3x3 number grid that implements ripple-based logic rules, visual state changes, and a locking mechanism.

## 🚀 Live Demo

🔗 **[View Live Application](https://recursive-grid-eight.vercel.app/)**

## 📋 Overview

The Recursive Grid is a React-based web application that demonstrates:
- **Stateful UI management** with React hooks
- **Deterministic rule-based state propagation** through ripple effects
- **Edge-safe logic handling** with bounds checking
- **Visual feedback** based on computed conditions
- **Clean deployment pipeline** on Vercel

## 🎮 How It Works

### Basic Interaction
Click any box to increment its value by 1.

### Ripple Rules

#### Rule A: Divisible by 3
When a box's value becomes divisible by 3:
- The **right neighbor** decrements by 1
- Only applies if not in the last column (indices 2, 5, 8)
- Skips if the right neighbor is locked

#### Rule B: Divisible by 5
When a box's value becomes divisible by 5:
- The **box below** increments by 2
- Only applies if not in the bottom row (indices 6, 7, 8)
- Skips if the bottom neighbor is locked

### Locking Mechanism
When any box reaches a value ≥ 15:
- Background turns **red**
- Box becomes **permanently locked**
- Cannot be clicked or modified by ripple effects
- Cursor changes to `not-allowed`

### Visual States

| State | Background | Text Color | Condition |
|-------|-----------|-----------|-----------|
| Even | `#e0e0e0` (Light Gray) | Black | `value % 2 === 0` |
| Odd | `#1a237e` (Dark Blue) | White | `value % 2 !== 0` |
| Locked | Red | White | `value >= 15` |

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 8
- **Styling**: CSS Modules
- **State Management**: React useState hook
- **Deployment**: Vercel (Hobby Tier)

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/recursive-grid.git
   cd recursive-grid
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

## 🏗️ Project Structure

```
recursive-grid/
├── src/
│   ├── components/
│   │   ├── Grid.jsx          # Main grid component with ripple logic
│   │   ├── Grid.module.css   # Grid layout styling
│   │   ├── Box.jsx           # Individual box component
│   │   └── Box.module.css    # Box styling (even/odd/locked)
│   ├── App.jsx               # Root component
│   ├── App.module.css        # App layout and styling
│   ├── index.css             # Global styles
│   └── main.jsx              # Entry point
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🔒 Edge Case Handling

The application safely handles all edge cases:

1. **Last Column Protection**: Boxes at indices 2, 5, 8 don't crash when divisible by 3
2. **Bottom Row Protection**: Boxes at indices 6, 7, 8 don't crash when divisible by 5
3. **Locked State Integrity**: Locked boxes cannot be modified by clicks or ripples
4. **Immutable State Updates**: All state changes use the spread operator to prevent mutation bugs

## 🧪 Testing Scenarios

### Basic Functionality
- ✅ All boxes initialize at 0 with even styling
- ✅ Clicking increments value and updates styling
- ✅ Even/odd styling toggles correctly

### Ripple Rule A (Divisible by 3)
- ✅ Click box to 3 → right neighbor decrements
- ✅ Last column boxes (2, 5, 8) don't cause errors
- ✅ Locked neighbors are skipped

### Ripple Rule B (Divisible by 5)
- ✅ Click box to 5 → box below increments by 2
- ✅ Bottom row boxes (6, 7, 8) don't cause errors
- ✅ Locked neighbors are skipped

### Combined Rules
- ✅ Value 15 triggers both rules + locks the box
- ✅ Multiple ripples execute safely

### Locked State
- ✅ Locked boxes show red background
- ✅ Clicking locked boxes has no effect
- ✅ Ripples skip locked neighbors

## 🎨 Design Features

- **Gradient Background**: Purple gradient for visual appeal
- **Responsive Layout**: Works on desktop, tablet, and mobile
- **Interactive Feedback**: Subtle scale animation on click
- **Clear Rules Display**: Instructions visible below the grid
- **Accessibility**: High contrast colors, clear visual states

## 📝 Implementation Details

### State Management
```javascript
const [boxes, setBoxes] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
```

### Ripple Logic (Simplified)
```javascript
const handleBoxClick = (index) => {
  if (boxes[index] >= 15) return; // Locked check
  
  const newBoxes = [...boxes];
  newBoxes[index] += 1;
  
  // Rule A: Divisible by 3
  if (newValue % 3 === 0 && col !== 2 && newBoxes[rightIndex] < 15) {
    newBoxes[rightIndex] -= 1;
  }
  
  // Rule B: Divisible by 5
  if (newValue % 5 === 0 && row !== 2 && newBoxes[belowIndex] < 15) {
    newBoxes[belowIndex] += 2;
  }
  
  setBoxes(newBoxes);
};
```

## 🚢 Deployment

This project is deployed on Vercel:

1. Push code to GitHub
2. Import repository in Vercel dashboard
3. Configure build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Deploy!

## 📄 License

MIT License - feel free to use this project for learning or portfolio purposes.

## 👤 Author

Created as part of a technical assessment to demonstrate frontend architecture, state management, and edge-case handling skills.

---

**Built with ❤️ using React and Vite**
