class Header {
    constructor(root) {
        this.root = root;
        this.id = "header";
    }
    createHeader() {
        const headerElem = document.createElement("div");
        headerElem.innerText = "header";
        this.root.appendChild(headerElem)
    }
}

export default Header;