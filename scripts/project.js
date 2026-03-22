class Project extends HTMLElement {
    static get observedAttributes() {
        return ['title', 'desc', 'stack', 'link'];
    }

    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const title = this.getAttribute("title") || 'Empty';
        const desc = this.getAttribute("desc") || "Empty description";
        const stack = this.getAttribute("stack") || "";
        const link = this.getAttribute("link") || "";

        this.shadowRoot.innerHTML = `   
        <style>
                    .project {
                        background-color: #1e2030;
                        border-radius: 15px;
                        padding: 15px;
                        border: 2px solid #24273a;
                        transition: border ease 0.3s; 
                        display: block;  
                    }

                    .project:hover {
                        border: 2px solid #8aadf4; 
                    }
                    
                    .name {
                    
                    }
                    .desc {
                   
                    }
                    .accent {
                        color: #b7bdf8;
                    }
                </style>
                <div class="project">
                    <h2 class="name">${title}</h2>
                    <p class="desc">${desc}</p>
                    <p class="stack accent">${stack}</p>
                </div>    
        `;
    }
}

customElements.define('prog-project', Project);