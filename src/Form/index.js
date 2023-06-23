import "./style.css";

const Form = () => (
    <form className="form">
        <input className="form__newTaskInput" placeholder="Co jest do zrobienia?" autoFocus />

        <button className="form__addTaskButton">
            Dodaj zadanie
        </button>
    </form>
);

export default Form;