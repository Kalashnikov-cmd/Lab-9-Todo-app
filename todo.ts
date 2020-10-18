export class TodoEntry {
    public title = '';
    public date  = '';
    public desc  = '';
    
    constructor(title: string, date: string, desc: string) {
      this.title = title;
      this.date  = date;
      this.desc  = desc;
    }
  }