export function objectsDeeplyEqual(cmp1, cmp2) {
    if (cmp1 === cmp2) {
      return true;
    }
    
    if ((typeof cmp1 == "object" && cmp1 != null) && (typeof cmp2 == "object" && cmp2 != null)) {
      if (Object.keys(cmp1).length != Object.keys(cmp2).length) { 
        return false;
    }
    
      for (var prop in cmp1) {
        if (cmp2.hasOwnProperty(prop))
        {  
          if (! objectsDeeplyEqual(cmp1[prop], cmp2[prop]))
            return false;
        }
        else
          return false;
      }
      
      return true;
    }
    else {
      return false;
    }
  }