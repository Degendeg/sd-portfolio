import '../styles/Toggle.css'

const Toggle = ({ handleChange, isDark }) => {
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isDark}
      />
      <label className="toggle-label" htmlFor="check">
        <span className="toggle-label-span">
          {isDark ? '🌙' : '☀️'}
        </span>
      </label>
    </div>
  );
};
export default Toggle