class foot extends HTMLElement{
    constructor(){
        super()
    }

    connectedCallback(){
        this.innerHTML=
        `<img src="./New folder (2)/s4.png" width="100" height="130">
        <div style="background: linear-gradient(to bottom, #ffff66 0%, #ff9966 100%);padding: 10px;">
    
        
        <h2>Contact us:-</h2>
        <div><img src="./icons/globe-solid.svg" width="20px" height="20px" style="margin-bottom:-5px"> : <a href="wwww.adhyapana.com" target="_blank">www.adhyapana.com</a></div>
        <div style="float: right;margin-top:-30px;margin-right: 20px"><img src="./icons/envelope-solid (1).svg" width="20px" height="20px" style="margin-bottom:-5px"> : <a href="mailto:seniorprincipal@adhyapana.com">seniorprincipal@adhyapana.com</a></div>
        </div>
        `
    }
}

customElements.define("foot-comp",foot)