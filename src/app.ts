import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponent } from "./components/page/page.js";

class App {
    private readonly page: PageComponent;
    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);

        const iamge = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
        iamge.attachTo(appRoot, 'beforeend');

        const video = new VideoComponent('Video Title', 'https://youtu.be/lu0XVRP_Bfc');
        video.attachTo(appRoot, 'beforeend');

        const note = new NoteComponent('Note Title', 'Note Body');
        note.attachTo(appRoot, 'beforeend');

        const todo = new TodoComponent('Todo Title', 'Todo Item');
        todo.attachTo(appRoot, 'beforeend');
    }
}

// 동적으로 만드는것이 아니라 개발할때 정확히 정해져있는경우는 null이 아님을 명시하고
// 필요시 Type assertion을 사용할 수 있다. 
new App(document.querySelector('.document')! as HTMLElement);