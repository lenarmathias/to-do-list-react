import "./style.css";

const Buttons = ({tasks, hiddenDone}) => (
    tasks.length > 0 && (
        <div className="buttons">
            <button className="buttons__button">
                {hiddenDone
                    ? "Pokaż ukończone"
                    : "Ukryj ukończone"}
            </button>
            <button
                className="buttons__button"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </div>
    )
);

export default Buttons;