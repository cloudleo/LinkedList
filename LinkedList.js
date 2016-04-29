
function Node(n){ this.element = n; this.next = null; } // Create a Node with a reference to next


function LList(){ this.head = new Node("head");}  //Create a Linked List with the head being defined;



LList.prototype.insert = function(n){ 
var current = this.head;               //Starting from the head, we will traverse until current.next === null
while(current.next !== null){          
	current = current.next;
 }
current.next = new Node(n);             //After traversing to the end, then add a new Node
return this;                            //Return this will makes chaining  available
}


LList.prototype.find = function(n){  
	var current = this.head;        //Start from the head of the list
 while (current.element !== n){     //traverse through the list until it finds the element 
 	current = current.next;
 }                
 return current;                    //And return it 
}


LList.prototype.prev = function(n){
var current = this.head; 
  while(current.next.element !== n){      //traversing and looking ahead of the next node
  	current = current.next;
  }           
  	return current;                       //return the current node to get previous node of element
  }


// Also A CRACKING THE CODE CHAPTER 2 LINKED LIST QUESTION
//2 3 Implement an algorithm to delete a node in the middle of a single linked list, given only access to that node
LList.prototype.remove = function(n){ 
	var current = this.find(n);          //use the find method already defined to get the parameter
	var pre = this.prev(n);               // use the pre method to store previous node
	pre.next = current.next;              //make previous node acknowedge current next making current nonexistant
}




LList.prototype.display = function(){          //this function displays to the console in a nice format
	var current = this.head; var line = "";     //to understand linkedList
	while(current.next !== null){
		line += current.element + " -> ";
		current = current.next
	}
	line += current.element + " -> ";
	console.log(line, "null");
}


// CRACKING THE CODE CHAPTER 2 LINKED LIST QUESTIONS
// Write code to remove duplicates from an unsorted linked list
//Solution
LList.prototype.removeDup = function(){     //this function remove duplicates in the list by using a hash
	var hash = {}, current = this.head;      //and with the hash data structure, keys cant be duplicated
	while(current.next !== null){
		if (!hash.hasOwnProperty(current.element)){
			hash[current.element] = 0;          //if it dont exist in the hash..then put it in the hash with value being 0
        }else{ 
        	this.remove(current.element);    //if it does exist in the hash...then remove the node
        }
	  current = current.next;
	}
}	

// Implement an algorithm to find the nth to last element of a singly linked list
LList.prototype.fromlast = function(n){
	var current = this.head, hash = {}, counter = 0;
	if(!hash.hasOwnProperty(n)){
	while(current.next !== null){
		hash[counter] = current ;
		current = current.next;
		++counter;
	}
      hash[counter] = current;
  }
    return hash[(counter - n)];
}
//REVERSRING A LINKED LIST USING AN ARRAY
LList.prototype.reversal = function(){
	var current = this.head; arr = []; return_nu = new LList();
	while(current.next !== null){           //traverse down the list and push them to the array
		arr.push(current.element);
		current = current.next;
	}
	  arr.push(current.element);     //push the last element into the array since thats where the while loop stops
		for (var i = arr.length - 1; i > 0 ; --i){   //loop through the array backwards and insert the values
               return_nu.insert(arr[i]);
		}
	return return_nu;	
}
// You have two numbers represented by a linked list,
//  where each node contains a sin-gle digit The digits are stored in reverse order,
//   such that the 1’s digit is at the head of the list Write a function that adds the two numbers 
//   and returns the sum as a linked list

// EXAMPLE

// Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)

// Output: 8 -> 0 -> 8

 function addlist(l1,l2){
    var sum = new LList(),      
    current1 = l1.reversal().head,  //use the reversal method and get the head
    current2 = l2.reversal().head, 
    arr = [], 
    nu;
while(current1.next !== null && current2.next !== null){  //traverse both and put the sum in an array
	nu = current1.element + current2.element;
	if (current1.element !== "head"){
		
	arr.push(nu);
}
	current1 = current1.next; current2 = current2.next; 

}
arr.push(current1.element + current2.element);  

  for(var i = arr.length - 1; i >= 0 ; --i){  //loop through the array to check if any value is over 10
	if(arr[i] >= 10){
		arr[i+1] += +arr[i].toString()[0];   // if value is over or equal to 10, then turn it into string and get the 0th indice of the string and turn it back into a number and add it to the indice before this current value
		arr[i] -= 10;     // subtract the current value 10
	}
}
for(var j = arr.length - 1; j >= 0; --j){   //loop through the array backwards and start inserting the array
		sum.insert(arr[j]);
}
return sum;                             
}
var cool = new LList();
cool.insert("A");
cool.insert("B");
cool.insert("C");
cool.insert("D");
cool.insert("E");
cool.display();  // head -> A -> B -> C -> D -> E ->  null
console.log(cool.prev("E")); // Node { element: 'D', next: Node { element: 'E', next: null } }
console.log(cool.fromlast(0));; //Node { element: 'E', next: null }
console.log("=".repeat(20));
 cool = cool.reversal();
 cool.display();       // head -> E -> D -> C -> B -> A ->  null
 var link1 = new LList();
 var link2 = new LList();
 link1.insert(3).insert(1).insert(5);      
 link2.insert(5).insert(9).insert(2);
 link1.display();                    //head -> 3 -> 1 -> 5 ->  null
 link2.display();                    //head -> 5 -> 9 -> 2 ->  null
 var sum = addlist(link1,link2);     
 sum.display();                      //head -> 9 -> 0 -> 7 ->  null

