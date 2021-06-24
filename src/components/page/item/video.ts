import { BaseComponent } from "../../component.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
    constructor(title: string, url: string){
        super(`<section class="video">
                <div class="video__player">
                <iframe class="video__iframe"></iframe>
                </div>
                <h3 class="video__title"></h3>
                 </section>`);

        const iframe = this.element.querySelector('.video__iframe')! as HTMLFrameElement;
        iframe.src = 'https://www.youtube.com/embed/lu0XVRP_Bfc';   // url -> videoId -> embed 
        console.log(url);
        
        const titleElement = this.element.querySelector('.video__title')! as HTMLHeadingElement;
        titleElement.textContent = title;

    }
}

// <iframe width="1776" height="872" src="https://www.youtube.com/embed/lu0XVRP_Bfc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; <iframe width="1776" height="872" src="https://www.youtube.com/embed/lu0XVRP_Bfc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>