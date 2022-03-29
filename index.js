let userUId = (username="", age="")=>{
    const dt = new Date().valueOf();
    const string = (Math.random() + 1).toString(36).substring(2);
    const string2 = btoa(Math.random().toString()).substr(10, 22);
    const dateString = (new Date%9e6).toString(36);
    const anotherString = (0|Math.random()*9e9).toString(36);
    return `${dt}-${string2 + age}${string}${dateString}-${anotherString}${username}`;
};
module.exports = userUId;