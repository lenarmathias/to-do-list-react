import "./style.css";

const Buttons = ({tasks, hiddenDoneTasks}) => (
    tasks.length > 0 && (
        <div className="buttons__buttonsGrid">
            <button className={`buttons__buttons`}>
                {hiddenDoneTasks
                    ? "Pokaż ukończone"
                    : "Ukryj ukończone"}
            </button>
            <button
                className={`buttons__buttons`}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </div>
    )
);

export default Buttons;