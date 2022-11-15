/** Todo component é uma função javascript que retorna mais javascript, html e css */

/** SHADOW DOM */

class CardNews extends HTMLElement {
  constructor() {
    super(); /*Chama ao constructor de quem a class tá herdando*/

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  /** Criando o component cardnews */
  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card__left");

    const autor = document.createElement("span");
    autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href = this.getAttribute("link-url");

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content");

    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");

    const newsImage = document.createElement("img");
    newsImage.src = this.getAttribute("photo") || "assets/default.png";
    newsImage.alt = "foto da noticia";

    cardRight.appendChild(newsImage);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
    .card {
        width: 80%;
        border: 1px solid gray;
        box-shadow: 10px 15px 32px 0px rgba(0,0,0,0.75);
        -webkit-box-shadow: 10px 15px 32px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 15px 32px 0px rgba(0,0,0,0.75);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    
    .card__left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10px;
    }
    
    .card__left > span {
        font-weight: 400;
    }
    
    .card__left > a {
        margin-top: 15px;
        font-size: 25px;
        color: black;
        text-decoration: none;
    }
    
    .card__left > p {
        color: gray;
    }
    
    `;

    return style;
  }
}

customElements.define("card-news", CardNews);
