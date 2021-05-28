console.log("==============Welcome to Employee Wage Program =============")

const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random()*10)%2;
if(empCheck == IS_ABSENT)
{
        console.log("Employee is Present");
}
else 
{
    console.log("Employee is Absent");
}

///UC2

console.log("UC 2 : Calculating daily part and full time wage for employee : ");
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS =4;
const WAGE_PER_HOUR = 20;
let empHours = 0;
switch(empCheck)
{
    case IS_PART_TIME:
    console.log("Employee is working as part time : ");
    empHours=PART_TIME_HOURS;
    break;
    case IS_FULL_TIME:
    console.log("Employee is working as full time : ");
    empHours = FULL_TIME_HOURS;
    break;
    default:
    empHours =0;
    break;
}
//Calculate wage
let empWage = empHours*WAGE_PER_HOUR;
console.log("Employee wage is : " + empWage);

