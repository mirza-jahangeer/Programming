class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
        this.i = null;
    }
    insertNode(value){
        var newNode = new Node(value);
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length ++;
        console.log("Value inserted in list")
    }

    displayList(){
        this.i = this.head;
        while(this.i.next!=null){
            console.log(this.i.value);
            this.i.next;
        }
    }


}

var list = new SinglyLinkedList();
list.insertNode("Mirza");
list.insertNode("Hamza");
list.insertNode("Munazza");
list.insertNode("kinza");

list.displayList()