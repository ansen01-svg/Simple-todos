import { Form } from "../styled_components";
import TodosInput from "./add_input";
import AddButton from "./contained_button";


const TodosForm = () => {
    return (
        <Form>
            <TodosInput />
            <AddButton 
                width='15%' 
                height='56px' 
                title='Add' 
            />
        </Form>
    )
}


export default TodosForm;