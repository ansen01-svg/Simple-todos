import { Form } from "../styled_components";
import AddButton from "./add_button";
import TodosInput from "./add_input";


const TodosForm = () => {
    return (
        <Form>
            <TodosInput />
            <AddButton />
        </Form>
    )
}


export default TodosForm;