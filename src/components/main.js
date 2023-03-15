import { MainWrapper } from "../styled_components";
import Nav from "./nav_component";
import SearchComponent from "./search_component";
import TodosComponent from "./todos_component";


const Main = () => {
    return (
        <MainWrapper
            width='100vw'
            height='100vh'
        >
            <Nav />
            <SearchComponent />
            <TodosComponent />
        </MainWrapper>
    )
}


export default Main;