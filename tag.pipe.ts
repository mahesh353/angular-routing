import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'tag'
})

export class TagPipe implements PipeTransform {

    transform(name, gender) {

        if (gender == "Male") {
            return "Mr. " + name;
        } else {
            return "Miss. " + name;
        }

    }

}