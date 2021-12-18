var obj1 = {
    name: 'person1',
    address: 'chennai'
   }
   var obj2 = {
       address: 'chennai',
       name: 'person1'
   }
   
   var same = true;
   if (Object.keys(obj1).length == Object.keys(obj2).length) {
       for (key in obj1) {
           if (obj1[key] == obj2[key]) {
               continue;
           } else {
               same = false;
               break;
           }
       }
   } else {
       same = false;
   }
   console.log("equal " + same);