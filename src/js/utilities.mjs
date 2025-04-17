//create a function called render the template for the header and footer
export function renderWithTemplate(template,parentElement,data,callback){
    parentElement.insertAdjacentHTML("afterbegin",template)
    
    //refactor this function
    if(callback){
      callback(data);
    }
  }

  /**function to load the template needed for rendering. */
  async function loadTemplate (path) {
    const res = await fetch(path);
    const html = await res.text();
    return html
  }



/**function to render the partials */
export default async function headerfooterpartials(){
    /**get the files template and the dom selector to contian them */
    const headertemplate = await loadTemplate("../partials/header.html")
    const footertemplate = await loadTemplate("../partials/footer.html")

    const headerdom = document.querySelector("header")
    const footerdom = document.querySelector("footer")

    renderWithTemplate(headertemplate,headerdom)
    renderWithTemplate(footertemplate,footerdom)
}

/**function to get the parameter */
export function getParameter(param){
  /**get the parameter from search query */
  const url = window.location.search
  const params = new URLSearchParams(url)
  const job = params.get(param)
  return job
}


/**renderlistwithTemplate */
export function renderlistwithtemplate(templatefn,parentElement,list,position="afterBegin",clear= false){
  const htmlstring = list.map(templatefn)

  /**rendering process */
  if(clear){
    parentElement.innerHTML = "";
  }
  parentElement.insertAdjacentHTML(position, htmlstring.join(" "))
}

/**function renderwithtemplate */
export function renderwithtemplate(template,parentelement,data,callback){
  parentelement.insertAdjacentHTML("afterbegin",template)

  if(callback){
    callback(data);
  }
}
