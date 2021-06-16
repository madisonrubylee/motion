import { ImageComponent } from "./components/page/item/image.js";
import { PageComponent } from "./components/page/page.js";

class App {
    private readonly page: PageComponent;
    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);

        const iamge = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
        iamge.attachTo(appRoot, 'beforeend');
    }
}

// 동적으로 만드는것이 아니라 개발할때 정확히 정해져있는경우는 null이 아님을 명시하고
// 필요시 Type assertion을 사용할 수 있다. 
new App(document.querySelector('.document') ! as HTMLElement);