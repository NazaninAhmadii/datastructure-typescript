//Buubble Sort
import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0, 2]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
numbersCollection.sort()
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Xaayb');
// const characterSorter = new Sorter(charactersCollection);
// characterSorter.sort();
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
// const linkedListSorter = new Sorter(linkedList);
// linkedListSorter.sort();
linkedList.sort();
console.log(linkedList.print());
