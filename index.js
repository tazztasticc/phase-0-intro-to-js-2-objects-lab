var employee = {name:"Sam" streetAddress:"11 Broadway"};

function updateEmployeeWithKeyAndValue(object, key, value){
    return Object.assign({}, object, {[key]:value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(object,key,value){
    object[key]= value;
}

const updateEmployeeWithKeyAndValue= destructivelyUpdateEmployeeWithKeyAndValue(employee,'Jon', '12 Broadway');
    return employee;

    