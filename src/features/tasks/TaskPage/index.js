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
                title={id}
                body={<>nanana</>}
            />
        </>
    )
};

export default TaskPage;