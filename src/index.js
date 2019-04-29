// 异步引入
function getComponent() {
    return import(/* webpackChunkName: "lodash" */ 'lodash').then(({default: _})=>{
        const elem = document.createElement("div");
        elem.innerHTML = _.join([1,2,3],"-");
        return elem;
    })
};

document.addEventListener("click", ()=>{
    getComponent().then((elem)=>{
        document.body.appendChild(elem);
    });
})
