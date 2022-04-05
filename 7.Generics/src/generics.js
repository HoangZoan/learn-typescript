"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Hoang" }, { age: 27 });
function countAndDescribe(element) {
    let descriptionText = "Got no value.";
    if (element.length > 0) {
        descriptionText = "Got " + element.length + " element";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("Hi there"));
function extractAndConvert(obj, key) {
    return obj[key];
}
extractAndConvert({ name: "Hoang" }, "name");
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
// Generic Utility Types - Readonly
const names = ["Max", "Anna"];
