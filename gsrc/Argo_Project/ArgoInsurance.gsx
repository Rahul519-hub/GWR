package Argo_Project

enhancement ArgoInsurance : PolicyPeriod {
function postonchange(){
  if(this.Argo_Insurance.Firstname == "Rahul Royal"){
    this.Argo_Insurance.setAge(27)
  }if (this.Argo_Insurance.Firstname == "R Rahul"){
    this.Argo_Insurance.setAge(29)
  }if (this.Argo_Insurance.Firstname == "R Insurance"){
    this.Argo_Insurance.setAge(40)
  }

}

}
