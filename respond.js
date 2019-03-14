// Respond.js 0.1 by theLMGN
// https://thelmgn.com
const respond = {
  update: function() {
    var elems = document.querySelectorAll(".respondUpdate")
    if (arguments.length > 0) {
      elems = arguments
    }
    for (var elem of elems) {
      respond.updateOne(elem)
    }
  },
  updateOne: function(elem) {
    var dataset = elem.dataset
    for (var data in dataset) {
      if (data.startsWith("r_")) {
        var name = data.replace("r_","")
        respond.apply(name,dataset[data],elem,elem)
      } else if (data.startsWith("rs_")) {
        var name = data.replace("rs_","")
        respond.apply(name,dataset[data],elem.style,elem)
      }
    }
  },
  apply: function(name,data,applyingTo,elem) {
    var eval = respond.eval(data,elem)
    for (var key in applyingTo) {
      console.log(key)
      if (key.toLowerCase() == name.toLowerCase()) {
        applyingTo[key] = eval
        console.log(applyingTo[key],applyingTo,key,eval)
      }
    }
  },
  eval: function(string,elem) {
    return (function(str){ return eval(str); }).call(elem, string);
  }
}
