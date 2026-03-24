class Work extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    static get observedAttributes() {
        return ['title', 'durat', 'position', 'desc'];
    }

    attributeChangedCallback() {
       this.render()
    }

    connectedCallback() {
        setTimeout(() => this.render())
    }

    render() {
        const title = this.getAttribute('title') || 'Title';
        const durat = this.getAttribute('durat') || '0year';
        const position = this.getAttribute('position') || 'none';
        const desc = this.getAttribute('desc') || 'Descritption';
        
        const techElements = Array.from(this.querySelectorAll('[slot="tech"]'));
        const techHTML = techElements.map(el => `<div class="lang">${el.innerHTML}</div>`).join('');
        
        console.log(techElements);

        this.shadowRoot.innerHTML = `          
                <style>
                   .work {
                        background-color: #1e2030;
                        border-radius: 15px;
                        padding: 15px;
                        border: 2px solid #24273a;
                        transition: border ease 0.3s;
                    }

                    .work:hover {                        border: 2px solid #8aadf4; 
                        border: 2px solid #8aadf4; 
                    }
                    .color {
                        color: #8aadf4;
                    }

                    .tech {
                        display: flex;
                        align-items: left;
                        gap: 20px;
                    }

                   .lang {
                        background-color: #24273a;
                        padding: 2px 18px;
                        border-radius: 5px;
                        margin-bottom: 15px;
                        margin-top: 2px;
                        transition: box-shadow ease 0.3s;
                        transition: transform ease 0.3s;    
                    }

                    .lang:hover {
                        box-shadow: 0px 1px 1px #8aadf4;
                        transform: translateY(-5px);   
                    }

                    .work-title {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }

                   .work-time {
                        color: #b8c0e0;
                    }

                    .work-desc {
                        margin: 0px;
                        margin-bottom: 10px;
                    }

                    h2 {
                        margin: 0px;
                        padding: 0px;
                    }

                </style>
                <div class="work">
                    <div class="work-title">
                        <h2>
                         ${title}
                        </h2>
                        <p class="work-time">
                         ${durat}
                        </p>
                    </div>
                    <p class="color work-desc">
                        ${position}
                    </p>

                    <div class="tech">
                        ${techHTML}
                    </div>
                    
                    <p>${desc}</p>        
                </div>
        `;
    }
}

customElements.define('work-block', Work)