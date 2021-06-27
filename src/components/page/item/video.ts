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
        //iframe.src = 'https://www.youtube.com/embed/lu0XVRP_Bfc';   // url -> videoId -> embed 
        iframe.src = this.convertToEmbeddedURL(url);
        
        const titleElement = this.element.querySelector('.video__title')! as HTMLHeadingElement;
        titleElement.textContent = title;

    }

    // 정규 표현식 Regex 
    private convertToEmbeddedURL(url: string): string {
        const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
        const match = url.match(regExp);
        console.log(match);
        
        const videoId = match ? match[1] || match[2] : undefined;
        if(videoId) {
            return `https//www.youtube.com/embed/${videoId}`;
        }
        return url;
    }
}

// <iframe width="1776" height="872" src="https://www.youtube.com/embed/lu0XVRP_Bfc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; <iframe width="1776" height="872" src="https://www.youtube.com/embed/lu0XVRP_Bfc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>