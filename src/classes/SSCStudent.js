class SSCStudent{

static passMarks = 35;

static aboutTenth = () =>{
  console.log(
    "Hello"
  );
};

  constructor(name,age,gender){
    console.log("We are team");
    console.log(name,age,gender);

    this.name=name;
    this.gender= 0;
    this.age =0;
    this.engMarks =0;
    this.telMarks =0;
    this.hindiMarks = 0;
    this.sciMarks =0;
    this.socMarks = 0;
    this.mathsMarks = 0;

}

calculateResult = () =>{
    console.log("Calculate result");

    if(
      this.engMarks >= SSCStudent.passMarks &&
      this.telMarks >= SSCStudent.passMarks &&
      this.hindiMarks >= SSCStudent.passMarks &&
      this.sciMarks >= SSCStudent.passMarks &&
      this.socMarks >= SSCStudent.passMarks &&
      this.mathsMarks >= SSCStudent.passMarks 

    ){

    }
}
}


export default SSCStudent;