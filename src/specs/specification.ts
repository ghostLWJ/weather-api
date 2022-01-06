import FilterDefinition from "./filter-definition";


export default interface Specification {
    GetPredicate(): FilterDefinition;
}

