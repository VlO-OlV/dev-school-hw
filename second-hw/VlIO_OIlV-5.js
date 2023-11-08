function getRootProperty(object, val) {
    let root = null;
    for(let key in object) {
      if(root == null) {
        if(Array.isArray(object[key]) == false) {
          if(getRootProperty(object[key], val) != null) {
            root = key;
          }
        } else if(object[key].indexOf(val) != -1) {
          root = key;
        } else {
          root = null;
        }
      }
    }
    return root;
}