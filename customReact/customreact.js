function customRender(reactElement,container){
    // const domElement = document.createElement
    // (reactElement.type)
    // domElement.innerHTML  = reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)

    // container.appendChild(domElement)

    //const domElement  = document.createElement

    const document = document.createElement(reactElement.type)
    domElememt.innerHTML = reactElement.children
    for(const props in props){
        if(prop =='children') continue;
        domElememt.setAttribute(prop,reactElement.props[props])
    }
        container.append(domElement)
}
const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'

    },
    children:'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)