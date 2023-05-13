//UC1_GettersAndSetters
class EmployeePayrollData {
    //Getter And Setter Method
    get id() {
      return this._id;
    }
    set id(id) {
      this._id = id;
    }
    get name() {
      return this._name;
    }
    set name(name) {
      let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
      if(nameRegex.test(name)) {
        this._name=name;
      }else {
        throw "Name is incorrect"
      }
    }
    get profilePic() {
      return this._profilePic;
    }
    set profilePic (profilePic) {
      this._profilePic = profilePic;
    }
    get gender () {
      return this._gender;
    }
    set gender(gender) {
      this._gender = gender;
    }
    get salary () {
      return this._salary;
    }
    set salary(salary) {
      this._salary = salary;
    }
    get department () {
      return this._department;
    }
    set department(department) {
      this._department = department
    }
    get note () {
      return this._note;
    }
    set note(note) {
      this._note = note
    }
    get startDate () {
      return this._startDate;
    }
    set startDate(startDate) {
      this._startDate = startDate;
    }
  
    //To String Method
    toString() {
      const options = {year: 'numeric', month: 'long', day: 'numeric'};
      
    }
    //method 
    toString() {

        const options = { year: 'numeric', month: long, day: 'numeric' }; 
        const empDate = !this.startDate ? "undefined" : this.startDate.toLocaleDateString("en-US", options); 
        return "id=" +this.id +", names='" + this.name+", gender='" + this.gender+ 
               ", profilePics='" + this.profilePic+ ", department=" + this.department + 
               ", salary=" + this.salary +", startDate=" + empDate +", notes=" + this.note;
    }

     
}
//UC2_AddEventListener
window.addEventListener('DOMContentLoaded', (event) => { 
    const name = document.querySelector('#name'); 
    const textError = document.querySelector('.text-error');

    name.addEventListener('input', function() { 
        if (name.value. length ==0) {

            textError.textContent = "";
            return;
        }
        try {
            (new EmployeePayrollData()).name = name.value;;
            textError.textContent = ""; 
        }catch (e) {
            textError.textContent = e;
        }
    });

    const salary = document.querySelector('#salary'); 
    const output = document.querySelector('.salary-output'); 
    output.textContent = salary.value;
    salary.addEventListener('input', function() { 
        output.textContent = salary.value;
    });
});