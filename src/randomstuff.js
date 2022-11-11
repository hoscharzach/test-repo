// spotlight the image

// let x = '200px'
// let y = '200px'
// let spotLightImage = useRef(null)

/*
  // `element` is the element you want to wrap
var parent = element.parentNode;
var wrapper = document.createElement('div');

// set the wrapper as child (instead of the element)
parent.replaceChild(wrapper, element);
// set element as child of wrapper
wrapper.appendChild(element);
*/

// function spotlight () {
//   document.getElementById('overlay').classList.remove("hidden")
//   document.getElementById('overlay').addEventListener("click", (e) => {
//     console.log("document event listener")
//     document.getElementById('overlay').classList.add('hidden')
//   })

//   if (spotLightImage.current) {
//    const spotlight = document.createElement('div')
//    let rect = spotLightImage.current.getBoundingClientRect()
//    console.log(rect)
//    spotlight.style.position = 'absolute'
//    spotlight.style.top = `${rect.top - 7.5}px`
//    spotlight.style.left = `${rect.left - 7.5}px`
//    spotlight.style.bottom = `${rect.bottom}px`
//    spotlight.style.right = `${rect.right}px`
//    spotlight.style.backgroundColor = 'white'
//    spotlight.style.height = `${rect.height +15 }px`
//    spotlight.style.width = `${rect.width + 15 }px`
//     spotlight.style.opacity = '.1'
//     spotlight.style.zIndex = '9999999';
//     const childElement = document.createElement('div')
//     childElement.width = '100px'
//     childElement.height = '100px'
//     childElement.color = 'white'
//     childElement.innerText = 'Check me out!'
//     childElement.position = 'absolute'
//     childElement.top = `${spotlight.style.bottom + 20}px`
//     spotlight.appendChild(childElement)
//     document.getElementsByClassName('App')[0].appendChild(spotlight)
//   //  spotLight.style.position = 'fixed'
//   //  spotLight.style.zIndex = "99999999"
//   //  document.getElementsByClassName('App')[0].appendChild(spotLight)
//   }
// }
