import Application from "@application";

export class BaseController {
    protected readonly App: Application;

    constructor() {
        this.App = Application.getInstance;
    }
}