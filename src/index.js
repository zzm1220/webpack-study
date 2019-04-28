// 同步引入
// import _ from 'lodash';
// console.log(_.join([1,3,4],"*"))

// 异步引入
function getComponent() {
    return import(/* webpackChunkName: "lodash" */ 'lodash').then(({default: _})=>{
        const elem = document.createElement("div");
        elem.innerHTML = _.join([1,2,3],"-");
        return elem;
    })
};

getComponent().then((elem)=>{
    document.body.appendChild(elem);
});