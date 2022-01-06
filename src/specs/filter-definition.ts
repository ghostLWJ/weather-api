export default class FilterDefinition {
    private condition: any;

    constructor(condition: any) {
        this.condition = condition;
    }

    public getCondition(): any {
        return this.condition;
    }

}
