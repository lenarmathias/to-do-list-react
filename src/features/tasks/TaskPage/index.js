import { useParams } from "react-router-dom";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

const TaskPage = () => {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <>
            <Header
                title="Szczegóły zadania"
            />
            <Section
                title={
                    task
                        ? task.content
                        : "Nie znaleziono zadania"
                }
                body={
                    <>
                        {task && (
                            <>
                                <strong>Ukończono:</strong>{" "}
                                {task.done ? "Tak" : "Nie"}
                            </>
                        )}
                    </>
                }
            />
        </>
    )
};

export default TaskPage;