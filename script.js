//Example to function call() and apply()

/*
  The major difference between call and apply is, with apply can parse array as a parameters 
  function.apply(refrenceObject [param1, param2, param3]);
  function.call(refrenceObject, param1, param2, param3) 
*/

const printInfo = function (name, marks) {
  console.log(`This the student ${name} from class ${this.className} and he scored avg ${marks}%`);
};

const studentObj = {
  className : "B.sc",
  studentFn : function (fn) {
    //refObj is a printInfo function ();
    const [refObj, name, marks] = arguments;
    fn.apply(this, [name, marks]);
    //Exmaple using call 
    //fn.call(this, name, marks);
  } 
};

//invoke PrintInfo() from studentObj method;


studentObj.studentFn(printInfo, "Syed", 77);
/* 
  expected Output:
  This the student Syed from class B.sc and he scored avg 77%
*/
