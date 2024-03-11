import "../styles/Toggle.css"

export const Toggle = ({ handleChange, isDark }) => {
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
                {isDark ? '🌙' : '☀️'}
            </label>
        </div>
    );
};