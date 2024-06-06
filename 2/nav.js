class nav extends HTMLElement{
    constructor(){
        super()
    }

    connectedCallback(){
        this.innerHTML=
        `<style>
        .navbar{
            overflow: hidden;
            background: linear-gradient(to bottom,#ffff66 0%, #ff9966 100%);
            padding: 20px;
        }

        .navbar a{
            float: left;
            padding: 20px;
        }

        .dropdown{
            float: left;
            overflow: hidden;
        }

        .dropbtn{
            outline: none;
            border: none;
            padding: 20px;
            font-size: 30px;
            background: inherit;
            font-family: inherit;
        }

        .dropdown-contents{
            display: none;
            min-width: 200px;
            position: absolute;
            z-index: 1;
        }

        .dropdown-contents a{
            display: block;
            float: none;
            font-size: 15px;
            text-align: left;
            background-color: antiquewhite;
        }

        .dropdown:hover .dropdown-contents{
            display: block;
        }
        .navbar a:hover, .dropdown:hover .dropbtn{
            background-color: aqua;
        }

        .dropdown1{
            float: left;
            overflow: hidden;
        }

        .dropbtn1{
            outline: none;
            border: none;
            padding: 20px;
            font-size: inherit;
            background-color: inherit;
            font-family: inherit;

        }

        .dropdown1-contents{
            display: none;
            min-width: 200px;
            position: absolute;
            z-index: 1;
        }

        .dropdown1-contents a{
            display: block;
            float: none;
            font-size: 15px;
            text-align: left;
            background-color: antiquewhite;
        }

        .dropdown1:hover .dropdown1-contents{
            display: inline;
        }
        .navbar a:hover, .dropdown1:hover .dropbtn1{
            background-color: aqua;
        }
    </style>
        <header>
        <div class="navbar">
        <img src="./icons/house-solid (1).svg" width="50" height="50" style="float:left;margin:10px">
        <div class="dropdown">
            <button class="dropbtn">Menu</button>
            <div class="dropdown-contents">
                <a href="./lifi.html">Lifi</a>
                <a>Block chain</a>
                <div class="dropdown1">
                    <button class="dropbtn1">AI</button>
                    <div class="dropdown1-contents">
                        <a>Alexa</a>
                        <a>Siri</a>
                    </div>
                </div>
            </div>
        </div>
        <div style="display:flex;justify-content: center;margin-top:-10px">
        <h1> Tech insider in the field of communication </h1>
        </div>
        
    </div>
        </header>
        `
    }
}

customElements.define("nav-comp",nav)