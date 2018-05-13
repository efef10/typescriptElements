class ListView {
    ul;
    constructor(ul) {
        this.ul = ul;
    }
    add(str){
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(str));
        this.ul.appendChild(li);
    }
}