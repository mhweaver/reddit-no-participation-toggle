if (localStorage['enableNP'] == undefined) {
  localStorage['enableNP'] = true
}

var enableNPText = (localStorage['enableNP'] == "true") ? 'on' : 'off'
enableDisable()
 
var toggleLink = document.createElement("a")
toggleLink.href = "javascript:void(0)"
toggleLink.id = "toggleNP"
toggleLink.innerText = "[NP " + enableNPText + "]"
  
var separator = document.createElement("span")
separator.className = "separator"
separator.innerText = "|"
  
var preferences = document.querySelector('a.pref-lang').parentNode.parentNode preferences.parentNode.insertBefore(toggleLink, preferences.nextSibling)
preferences.parentNode.insertBefore(separator, toggleLink)
  
    
    
toggleLink.addEventListener('click', function(e) {
  toggleNP()
  this.innerText = '[NP ' + (localStorage['enableNP'] == "true" ? 'on' : 'off') + ']'
}, false)

// Warning: Since this works with NodeLists, changes will be made to the actual
// NodeList object (as opposed to Array.map() which returns a new Array
// object), so this is NOT a pure function, unlike most map() functions
NodeList.prototype.map = function(fn) {
  for (i in this) {
    fn(this[i])
  }
  return this
}


function toggleNP() {
  localStorage['enableNP'] = localStorage['enableNP'] == "true" ? "false" : "true"
  if (localStorage['enableNP'] == "true") // if NP was just enabled
    alert("NP will be re-enabled after the page is reloaded.")
  enableDisable()
}
function disable(element) {
  pattern = /http:\/\/[^/]*np\.reddit\.com\//i;
  if (element.href != undefined && element.href.match(pattern)) {
    element.href = element.href.replace(pattern, "http://www.reddit.com/")
  }
}
function enable(element) {
  //pattern = /http:\/\/[^/]*\reddit\.com\//i;
  //if (element.dataset != undefined && element.dataset.isnp)
  //  element.href = element.href.replace(pattern, "http://np.reddit.com/")
}
function enableDisable() {
  if (localStorage['enableNP'] == 'true') {
    //document.querySelectorAll("a").map(enable)
  } else {
    document.querySelectorAll("a[href^='http://np.']").map(disable)
    document.querySelectorAll("a[href^='http://www.np.']").map(disable)
  }
}
window.addEventListener('hashchange', enableDisable)
