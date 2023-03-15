import { Form } from "../styled_components";
import TodosInput from "./add_input";
import AddButton from "./contained_button";


const TodosForm = () => {
    return (
        <Form>
            <TodosInput />
            <AddButton />
        </Form>
    )
}


export default TodosForm;