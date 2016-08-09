import {EventEmitter} from "events";

class TbHeadStore extends EventEmitter {
  constructor() {
    super()
    this.tbHead = [
      {id:1,name:"colum 1"},
      {id:2,name:"colum 2"},
      {id:3,name:"colum 3"},
      {id:4,name:"colum 4"}
    ];
  }
  getAll(){
    return this.tbHead;
  }
}
const tbHeadStore = new TbHeadStore;
export default tbHeadStore;
