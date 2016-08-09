import {EventEmitter} from "events";

class TbBodyStore extends EventEmitter {
  constructor() {
    super()
    this.tbBody = [
      {id:1,colum1:"value11",colum2:"value12",colum3:"value13",colum4:"value14"},
      {id:2,colum1:"value21",colum2:"value22",colum3:"value23",colum4:"value24"},
      {id:3,colum1:"value31",colum2:"value32",colum3:"value33",colum4:"value34"}
    ];
  }
  getAll(){
    return this.tbBody;
  }
}
const tbBodyStore = new TbBodyStore;
export default tbBodyStore;
