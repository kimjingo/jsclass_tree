	class Hero {
		constructor(name, level) {
			this.name = name;
			this.level = level;
		}

		// Adding a method to the constructor
 		greet() {
			// return `${this.name} says hello.`;
			console.log(`${this.name} says hi.`);
		}
	}

	// Creating a new class from the parent
	class Mage extends Hero {
		constructor(name, level, spell) {
		// Chain constructor with super
			super(name, level);

			// Add a new property
			this.spell = spell;
		}
	}

	class TreeNode {
		constructor(id, name, pid) {
			this.id = id;
			this.name = name;
			this.children = [];
			this.parent = new;
		}

		add_parent(pid) {
			child.parent=this;
			this.children[] = child;
		}

		add_child(child) {
			child.parent=this;
			this.children[] = child;
		}

		get_level(){
			level = 0;
			p = this.parent;
			while(p) {
				level++;
				p=p.parent;
			}
			return level;
		}

		print_tree(){
			spaces = " " * this.get_level()*3
			prefix = (this.parent? "\_" : "");
			console.log(spaces + prefix + this.name);
			if(this.children){
				for(child in this.children){
					child.print_tree();
				}
			}
		}
	}



// function searchTree(element, matchingTitle){
// 	     if(element.title == matchingTitle){
// 		               return element;
// 		          }else if (element.children != null){
// 				            var i;
// 				            var result = null;
// 				            for(i=0; result == null && i < element.children.length; i++){
// 						                   result = searchTree(element.children[i], matchingTitle);
// 						              }
// 				            return result;
// 				       }
// 	     return null;
// }
// Then you could call it:

// var element = data[0];
// var result = searchTree(element, 'randomNode_1');
