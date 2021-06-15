import { PageComponent } from "./components/page.js";

class App {
    private readonly page: PageComponent;
    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
    }
}

// 동적으로 만드는것이 아니라 개발할때 정확히 정해져있는경우는 null이 아님을 명시하고
// 필요시 Type assertion을 사용할 수 있다. 
new App(document.querySelector('.document') ! as HTMLElement);