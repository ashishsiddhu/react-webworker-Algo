// Binary search in sorted array
function binaryNumber(n) {
    let arr = [1];
    let i = 0;
    let result;
    while (i < n) {
        let s1 = arr[0];
        result = s1;
        arr.shift();
        arr.push(s1 + "0");
        arr.push(s1 + "1");
        i++;
    }
    return result;

}
binaryNumber(5);


// Iterative function to implement Binary Search
function binarySearch(arr, x) {
   
    let start=0, end=arr.length-1;
    while (start<=end){
        let mid=Math.floor((start + end)/2);
        if (arr[mid]===x) return true;
        else if (arr[mid] < x) 
             start = mid + 1;
        else
             end = mid - 1;
    }
   
    return false;
}
   
binarySearch(arr,key);
// Return true/false

// fabonacci
function fibonacci(n) {
    let fab = [];
    fab[0] = 0;
    fab[1] = 1;
    for(let i=2; i<=n; i++) {
        fab[i] = fab[i-1] + fab[i-2];
    }
    return fab[n];
}
fibonacci(8)

// Reccursion
function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}
for(let i = 0; i < 20; i++) {
    console.log(fibonacci(i));  // O/P 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
}

function primeNumberBolleanValue(n) {
    let arr = [];
    if (n <= 1) return false;
    if (n === 2) return true;
    let flag = true;
    for (let i = 3; i < n; i += 2) {
        if (n % i == 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
primeNumberBolleanValue(11)
// return true


function primeNumberArray(n) {
    let arr = [2];
    for (let i = 3; i <= n; i += 2)
        if (!((i % 3 == 0 && i > 3) || (i % 5 == 0 && i > 5) || (i % 7 == 0 && i > 7) || (i % 9 == 0 && i > 9))) {
            arr.push(i);
        }
    return arr;
}
primeNumberArray(100);
// return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]


function primeFactors(n) {
    let arr=[];
    let i = 2;
    while(i<=n){
        if(n%i == 0) {
            n= n/i;
            arr.push(i);
        } else {
            i++;
        }
    }
    return arr;
}

primeFactors(20)
// [2, 2, 5]


    
// Linked List class 

class link {
    constructor (aa){
        this.newVal = aa;
        this.done = true;
        this.count = 0;
    }
    next() {
        if(this.count==2) {this.done =false}
         let myval = this.newVal[this.count];
         this.count ++;
        return myval;
    }
    valid(){
        return this.done;
    }
}
let ii = new link([1,2,3,4,5])
while(ii.valid()){
    debugger
    console.log(ii.next())
}


// All Functions of linked list //linkedlist
class Node {
    constructor (element) {
        this.element = element;
        this.next = null
    }
}
class Linked {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(element) {
        let myNode =  new Node(element)
        debugger
        if(this.head == null) {
            this.head = myNode;
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = myNode;

        }
        this.size++;
        console.log(this);
    }
    insertAt (element, index) {
        if(index >= this.size) {
            index = this.size-1
        }
        let myNode = new Node(element);
        if(index === 0) {
            let newElem = this.head;
            myNode.next = newElem;
            this.head = myNode;
        } else {
            let current = this.head;
            let i=0;
            let prev;
            while (i<index) {
                prev = current;
                current = current.next;
                i++;
            }
            myNode.next = current;
            prev.next = myNode;
        }
        this.size++;
    }
    removeIndex(index) {
        if(index >= this.size) {
            index = this.size-1;
        }
        if(index===0) {
             let tmp = this.head;
             this.head = tmp.next;   
        } else {
            let current = this.head;
            let prev;
            let i =0;
            while (i< index) {
                prev = current;
                current = current.next;
                i++;
            }
            prev.next = current.next
        }
        this.size = this.size - 1;
    }
    removeElement(element) {
        let myNode = new Node(element);
        let prev;
        let current = this.head;
        let i=0;
        while (current!=null && current.element !== myNode.element) {
            prev =current;
            current= current.next;
            i++;
        }
        if(current!=null) {
            prev.next = current.next;
            this.size = this.size - 1;
        }
    }
    indexOf(element) {
        let myNode = new Node(element);
        let current = this.head;
        let prev;
        let i = 0
        while (current != null && myNode.element!== current.element) {
            prev = current;
            current = current.next;
            i++;
        }
        return current != null ? i : null;
    }
    printall () {
        if(!this.size) return false;
        let current = this.head;
        let str = "";
        while (current!=null) {
            str += current.element + " ";
            current = current.next; 
        }
         console.log("Print data ",str)
    }
    reverse () {
        let current = this.head;
        let prev = null;
        while (current) {
            let newlist = current.next; //  Remember next node
            current.next = prev; // REVERSE! None, first time round
            prev = current; // Used in the next iteration
            current = newlist; // Move to next node
        }
        return prev;
    }
    removeDuplicate () {
        let current = this.head;
        while (current) {
            // Adding condition to 
            if(current.next && current.element == current.next.element) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
        return this.head;
    }


} 

ll = new Linked()

ll.add(11)
ll.add(12)
ll.add(13)
ll.add(14)
ll.insertAt(77,3)
ll.printall()


function bracketsValidation(str) {
    var arr = [];
    if(typeof str == "string" && str.length %2 !== 0) return false;
    for(let i=0;i<str.length; i++) {
        if(str[i] == "[" || str[i] == "(" || str[i] == "{") {
            arr.push(str[i]);
        } else if(str[i] == "]") {
            if(arr[arr.length - 1] == "[") {
                arr.pop();
            } else {
                return false;
            }
        } else if(str[i] == ")") {
            if(arr[arr.length - 1] == "(") {
                arr.pop();
            } else {
                return false;
            }
        } else if(str[i] == "}") {
            if(arr[arr.length - 1] == "{") {
                arr.pop();
            } else {
                return false;
            }
        }
    }
    return arr.length == 0;
}
bracketsValidation("[{()}]")


class MaxHeap {
    constructor(){
        // this is where the array that represents our heap will be stored
        this.values = [];
    }
    parent(index) {
        return Math.floor((index - 1) / 2);
    }

    // index of the left child node
    leftChild(index) {
        return (index * 2) + 1;
    }

    // index of the right child node
    rightChild(index) {
        return (index * 2) + 2;
    }
    swap(index1, index2) {
        [this.values[index1], this.values[index2]] = [this.values[index2], this.values[index1]];
    }
    add(element) {
        // add element to the end of the heap
        this.values.push(element);
        // move element up until it's in the correct position
        this.heapifyUp(this.values.length - 1);
    }
    heapifyUp(index) {
        let currentIndex = index,
            parentIndex = this.parent(currentIndex);

        // while we haven't reached the root node and the current element is greater than its parent node
        while (currentIndex > 0 && this.values[currentIndex] > this.values[parentIndex]) {
            // swap
            this.swap(currentIndex, parentIndex);
            // move up the binary heap
            currentIndex = parentIndex;
            parentIndex = this.parent(parentIndex);
        }
    }
}

let heap = new MaxHeap ();
heap.add(2)
heap.add(3)
heap.add(5)
heap.add(8)
heap.add(1)


// bubble sort
function bubbleSort (arr) {
    let i=0
    while(i<arr.length){
        let j = 0;
        while(j<arr.length){
            if(arr[j]> arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
            j++;
        }
        i++;
    }
    return arr;
}
let arr = [1,2,3,4,6,10,3,5,23]
bubbleSort(arr) // o/p [1, 2, 3, 3, 4, 5, 6, 10, 23]

// merge sort array
function merge(left,right) {
    let newArr = [];
    while(left.length&& right.length) {
        if(left[0] < right[0]) {
            newArr.push(left.shift())
        } else {
            newArr.push(right.shift())
        }
    }
    return [...newArr, ...left, ...right]
}

function mergeSort (arr) {
    let half = Math.floor(arr.length/2);
    if(arr.length < 2) return arr;
    let left = arr.splice(0,half)
    return merge(mergeSort(left),mergeSort(arr))
}
let arr = [1,2,3,4,6,10,3,5,23]
mergeSort(arr)
// o/p [1, 2, 3, 3, 4, 5, 6, 10, 23]


// second largest number
function secondLargest(arr) {
    let prev = [0]
    let i =1;
    let largest =0;
    while(i<arr.length){
        let current = arr[i];
        if(current > largest ) {
            largest = current;
            prev = arr[i-1];
        } else if (current > prev && current < largest) {
            prev = current
        }
        i++;
    }
    return prev;
}

let arr = [1,2,3,41,61,10,3,5,23];
secondLargest(arr); // O/P>> 41



function removeDuplicates(arr) {
    let i=0;
    let newArr= [];
    while(i < arr.length) {
        if(arr[i] < arr[i+1]) {
            newArr.push(arr[i])
        } else if (i === (arr.length-1)) {
            newArr.push(arr[i])
        }
        i++;
    }
    return newArr;
}
var arr = [1,2,3,4,4,5,5,5,6,7,7]
removeDuplicates(arr); // O/P [1, 2, 3, 4, 5, 6, 7]

// Buy on low day and sell on High day // maximumprofit
var maxProfit = function(prices) {
    if(!Array.isArray(prices) || prices.length <= 1) return 0;
    let i=0;
    let minprice = Infinity
    let maxprofit = 0;
    while(i<prices.length) {
        let current = prices[i];
        if (current < minprice) {
            minprice = current;
        } else if (current - minprice > maxprofit) {
            maxprofit = current - minprice;
        }
        i++;
    }
    
    return maxprofit;
};
maxProfit([7,1,5,3,6,4]) // O/p 5


var moveZeroes = function(nums) {
    var i = nums.length;
    while (i > -1) {
        let current = nums[i];
        if(nums[i] === 0) {
            nums.splice(i,1)
            nums.push(current)
        } 
       i--; 
    }
    return nums;
};
let arr = [0,1,0,3,12]
moveZeroes(arr) // O/P [1,3,13,0,0]


function coinChange(coins, amount) {
    // Each memo[i] is the least amount of coins
    // that can make the value equal to the index value.
    const memo = Array(amount + 1).fill(Infinity);
    memo[0] = 0;
  
    for (let i = 1; i <= amount; i++) {
      for (const coin of coins) {
        if (i - coin >= 0) {
          memo[i] = Math.min(memo[i], memo[i - coin] + 1);
        }
      }
    }
    return memo[amount] === Infinity ? -1 : memo[amount];
}
coins = [2,3,5]
amount = 11     // O/P > 3    i.e.[5,3,3]
coins = [2,3,7]
amount = 15     // O/P > 4   2,3,3,7
coinChange(coins,amount) 


// Find common string in two strings
function longestCommonSubsequence (text1,text2) {
    let i = 0;
    let str = "";
    while(i<text1.length) {
        let j = 0;
        while(j<text2.length) {
            if(text1[i] === text2[j]) {
                str +=text1[i];
            }
            j++;
        }
        i++
    }

  return str;
}
let text1 = "abcde", text2 = "ace"
longestCommonSubsequence(text1,text2) // O/P 'ace'


// Given a string s, find the longest palindromic substring in s.
function longestPalindrome(str) {
    let i =0;
    let longest = "";
    while (i<str.length) {
        let odd = expendFromCenter(str,i,i);
        let even = expendFromCenter(str,i-1,i);
        if(even.length > longest.length){
            longest = even;
        }
        if(odd.length > longest.length){
            longest = odd;
        }
        i++;
    }
    return longest;
}
/// continue ///
function expendFromCenter(str,left,right) {
    let i =0;
    while (str[left-i]&& str[left-i] == str[right+i]) {
        i++;
    }
    i--;
    return str.slice(left-i, right+i+1)

}

pand("gcbabcf") // O/P "cbabc"
// end


//  First unique character in string
function uniqueStr (str) {
    let i = 0;
    let map = new Map()
    while (i<str.length) {
        let prev = map.has(str[i]);
        if(prev){
            let getValue = map.get(str[i])
            map.set(str[i], getValue +1)
        } else {
            map.set(str[i], 1)
        }
        i++;
    }
    let result;
    for(let [key,value] of map) {
        if(value === 1) {
            result = key;
            break;
        }
    }
    return result;
}
uniqueStr("loveleetcode") // O/P >> 'v'  //Because 'v' is the the first char who is unique(non-repeated) in this string

// deep clone object and array*
function cloneObject(obj) {
    var clone = {};
    for(var i in obj) {
        if(typeof(obj[i])=="object" && obj[i] != null)
            clone[i] = cloneObject(obj[i]);
        else
            clone[i] = obj[i];
    }
    return clone;
}

var aa = {
    b: 1,
    c: {
        d: 2,
        e: {f: 3}
    }
}
cloneObject(aa) // It will return deep clone of Obj and array*
    

// Max depth of the tree
class Node {
    constructor(item) {
        this.data = item;
        this.left = this.right = null;
    }
}
let root;
/* Compute the "maxDepth" of a tree -- the number of
  nodes along the longest path from the root node
  down to the farthest leaf node.*/
function maxDepth(node) {
    if (node == null)
        return 0;
    else {
        /* compute the depth of each subtree */
        let lDepth = maxDepth(node.left);
        let rDepth = maxDepth(node.right);

        /* use the larger one */
        if (lDepth > rDepth)
            return (lDepth + 1);
        else
            return (rDepth + 1);
    }
}
root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
maxDepth(root);
 