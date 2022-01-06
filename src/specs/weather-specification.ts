
import Specification from './specification';
import FilterDefinition from './filter-definition';

export default class WeatherSpecification implements Specification {

    public city: string;

    GetPredicate(): FilterDefinition {
        return new FilterDefinition({
            city: this.city
        });
    }

}

